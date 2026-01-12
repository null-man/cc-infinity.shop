"use client"

import { ShoppingBag, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart-store"
import { useState } from "react"

interface QuickAddButtonProps {
  product: {
    id: number
    name: string
    price: number
    image: string
    category: string
  }
}

export function QuickAddButton({ product }: QuickAddButtonProps) {
  const addItem = useCartStore((state) => state.addItem)
  const [added, setAdded] = useState(false)

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Button 
      size="sm" 
      className="w-full rounded-none text-xs"
      onClick={handleAdd}
    >
      {added ? (
        <>
          <Check className="h-3 w-3 mr-2" />
          Added!
        </>
      ) : (
        <>
          <ShoppingBag className="h-3 w-3 mr-2" />
          Quick Add
        </>
      )}
    </Button>
  )
}
