"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // 延迟显示，避免页面加载时闪烁
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container max-w-4xl mx-auto">
        <div className="bg-card border shadow-lg rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to enhance your browsing experience and analyze site traffic. 
              By clicking "Accept", you consent to our use of cookies.{" "}
              <Link href="/cookie-policy" className="underline hover:text-foreground">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="rounded-none"
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="rounded-none"
            >
              Accept
            </Button>
          </div>
          <button
            onClick={handleDecline}
            className="absolute top-2 right-2 md:hidden p-1 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
