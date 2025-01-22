'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Heart, Minus, Plus, Share2, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Product } from '@/types/product'

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // Create an array of the same image for the gallery
  const productImages = Array(4).fill(product.imageUrl)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-20 w-20 overflow-hidden border-2 ${
                  selectedImage === index ? 'border-[#B88E2F]' : 'border-transparent'
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.title} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative flex-1 aspect-square">
            <Image
              src={productImages[selectedImage] || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-medium">{product.title}</h1>
          <div className="flex items-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">5 Customer Review</span>
          </div>
          <div className="text-2xl">Rs. {product.price.toLocaleString()}</div>
          <p className="text-gray-600">{product.description}</p>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-medium">Size</h3>
              <div className="flex gap-4">
                {['L', 'XL', 'XS'].map((size) => (
                  <button
                    key={size}
                    className="h-8 w-8 rounded border border-gray-300 hover:border-[#B88E2F] hover:text-[#B88E2F]"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-medium">Color</h3>
              <div className="flex gap-4">
                {['#3A5463', '#B88E2F'].map((color) => (
                  <button
                    key={color}
                    className="h-8 w-8 rounded-full border-2 border-white ring-2 ring-gray-300 hover:ring-[#B88E2F]"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center border border-gray-300">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button 
                className="bg-[#B88E2F] hover:bg-[#A17922] text-white"
              >
                Add To Cart
              </Button>
              <button className="rounded-full p-2 hover:bg-gray-100">
                <Heart className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="space-y-2 border-t pt-6">
            <div className="flex gap-2 text-sm text-gray-600">
              <span className="font-medium">SKU:</span>
              <span>{product._id}</span>
            </div>
            <div className="flex gap-2 text-sm text-gray-600">
              <span className="font-medium">Category:</span>
              <span>{product.tags?.[0] || 'N/A'}</span>
            </div>
            <div className="flex gap-2 text-sm text-gray-600">
              <span className="font-medium">Tags:</span>
              <span>{product.tags?.join(', ') || 'N/A'}</span>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <span className="text-sm text-gray-600">Share:</span>
              <button className="hover:text-[#B88E2F]">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="hover:text-[#B88E2F]">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

