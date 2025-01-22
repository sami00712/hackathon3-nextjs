'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, Share2, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useStore } from '@/context/StoreContext'
import type { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, addToWishlist } = useStore()

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href,
      })
    } else {
      alert('Sharing is not supported on this browser')
    }
  }

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
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <Button 
              className="w-[80%] bg-[#B88E2F] hover:bg-[#A17922] text-white"
              size="sm"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </Button>
            <div className="flex items-center gap-4">
              <button 
                onClick={handleShare}
                className="rounded-full p-2 bg-white/90 hover:bg-white transition-colors"
              >
                <Share2 className="h-4 w-4" />
              </button>
              <button 
                className="rounded-full p-2 bg-white/90 hover:bg-white transition-colors"
              >
                <Scale className="h-4 w-4" />
              </button>
              <button 
                onClick={() => addToWishlist(product)}
                className="rounded-full p-2 bg-white/90 hover:bg-white transition-colors"
              >
                <Heart className="h-4 w-4" />
              </button>
            </div>
          </div>
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

