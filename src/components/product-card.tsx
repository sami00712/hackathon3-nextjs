'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, Share2, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover"
        />
        {product.discountPercentage && (
          <div className="absolute right-4 top-4 z-10">
            <div className="rounded-full bg-red-500 px-2 py-1 text-sm font-medium text-white">
              -{product.discountPercentage}%
            </div>
          </div>
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex items-center gap-4 text-white">
            <button className="rounded-full p-2 hover:bg-white/20 transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 hover:bg-white/20 transition-colors">
              <Scale className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 hover:bg-white/20 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
          </div>
          <Button 
            className="w-[80%] bg-[#B88E2F] hover:bg-[#A17922] text-white"
            size="sm"
          >
            Add to cart
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <Link href={`/products/${product._id}`}>
          <h3 className="font-semibold text-lg">{product.title}</h3>
          <p className="text-sm text-gray-600">{product.tags?.[0]}</p>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold">
              Rp {product.price.toLocaleString()}
            </span>
            {product.discountPercentage && (
              <span className="text-gray-500 line-through">
                Rp {((product.price * 100) / (100 - product.discountPercentage)).toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

