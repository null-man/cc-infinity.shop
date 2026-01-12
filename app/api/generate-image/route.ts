import { NextRequest, NextResponse } from 'next/server';

interface GenerateImageRequest {
  prompt: string;
  imageInput?: string[];
  aspectRatio?: string;
  resolution?: string;
  model?: string;
  callbackUrl?: string;
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RUXA_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: '服务器未配置 API key' },
        { status: 500 }
      );
    }

    const body: GenerateImageRequest = await request.json();

    const payload = {
      callback_url: body.callbackUrl || 'https://webhook.site/7ea5c0ee-296b-496d-9842-eacfac189931',
      input: {
        prompt: body.prompt,
        image_input: body.imageInput || [],
        aspect_ratio: body.aspectRatio || '1:1',
        resolution: body.resolution || '4K',
      },
      model: body.model || 'google/nano-banana-pro',
    };

    const response = await fetch('https://api.ruxa.ai/api/v1/tasks/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `API 请求失败: ${errorText}` },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('生成图片失败:', error);
    return NextResponse.json(
      { error: '生成图片失败' },
      { status: 500 }
    );
  }
}
