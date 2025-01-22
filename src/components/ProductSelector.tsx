'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Product } from '@/types/product'

interface ProductSelectorProps {
  products: Product[]
  onSelect: (product: Product) => void
  selectedProducts: Product[]
}

export function ProductSelector({ products, onSelect, selectedProducts }: ProductSelectorProps) {
  const availableProducts = products.filter(
    product => !selectedProducts.find(p => p._id === product._id)
  )

  return (
    <Select
      onValueChange={(value) => {
        const product = products.find(p => p._id === value)
        if (product) onSelect(product)
      }}
    >
      <SelectTrigger className="w-[200px] bg-[#FB9D2C] text-white hover:bg-[#FB9D2C]/90">
        <SelectValue placeholder="Choose a Product" />
      </SelectTrigger>
      <SelectContent>
        {availableProducts.map((product) => (
          <SelectItem key={product._id} value={product._id}>
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <span>{product.title}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

