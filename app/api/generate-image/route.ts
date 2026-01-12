import { NextRequest, NextResponse } from 'next/server'

// 配置你的 AI 图片生成服务
// 支持: openai (DALL-E), stability, replicate 等
const AI_PROVIDER = process.env.AI_IMAGE_PROVIDER || 'openai'
const API_KEY = process.env.AI_IMAGE_API_KEY || ''

export async function POST(request: NextRequest) {
  try {
    const { prompt, size = '1024x1024', style = 'vivid' } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }

    if (!API_KEY) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
    }

    let imageUrl: string

    if (AI_PROVIDER === 'openai') {
      // OpenAI DALL-E 3
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt,
          n: 1,
          size,
          style,
        }),
      })

      const data = await response.json()
      if (data.error) {
        return NextResponse.json({ error: data.error.message }, { status: 400 })
      }
      imageUrl = data.data[0].url

    } else if (AI_PROVIDER === 'stability') {
      // Stability AI
      const response = await fetch('https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          text_prompts: [{ text: prompt }],
          cfg_scale: 7,
          height: 1024,
          width: 1024,
          samples: 1,
        }),
      })

      const data = await response.json()
      if (data.message) {
        return NextResponse.json({ error: data.message }, { status: 400 })
      }
      // Stability 返回 base64，需要转换
      imageUrl = `data:image/png;base64,${data.artifacts[0].base64}`

    } else {
      return NextResponse.json({ error: 'Unsupported AI provider' }, { status: 400 })
    }

    return NextResponse.json({ 
      success: true, 
      imageUrl,
      prompt 
    })

  } catch (error) {
    console.error('Image generation error:', error)
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 })
  }
}
