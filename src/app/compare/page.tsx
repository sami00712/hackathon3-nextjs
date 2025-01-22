'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { StarRating } from '@/components/StarRating'
import type { Product } from '@/types/product'
// import { Header } from '@/components/Header'

async function getProducts() {
  const res = await fetch(
    'https://6wo2r8dl.api.sanity.io/v2025-01-18/data/query/production?query=*%5B_type+%3D%3D+%22product%22%5D'
  )
  const data = await res.json()
  return data.result as Product[]
}

export default function ComparePage() {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [showProductList, setShowProductList] = useState(false)

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  const addProduct = (product: Product) => {
    if (selectedProducts.length < 2) {
      setSelectedProducts([...selectedProducts, product])
      setShowProductList(false)
    }
  }

  const removeProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(p => p._id !== productId))
  }

  const availableProducts = products.filter(
    product => !selectedProducts.find(p => p._id === product._id)
  )

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <div className="relative h-[300px] w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/sp.png" 
          alt="Blog banner background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        
        <div className="absolute inset-0 "></div>
      </div>

      
      <div className="relative h-full max-w-6xl mx-auto px-4">
        
        <div className="flex justify-center pt-8">
          <svg 
            viewBox="0 0 24 24" 
            className="w-12 h-12 text-amber-500"
            fill="currentColor"
          >
            <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" />
          </svg>
        </div>

        {/* Text Content */}
        <div className="text-center text-black mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Comparison</h1>
          
          {/* Breadcrumb */}
          <nav className="flex justify-center items-center space-x-2 text-sm md:text-base">
            <Link href="/" className="hover:text-amber-500 transition-colors">
              Home
            </Link>
            <span className="text-black">›</span>
            <span className="text-black">Comparison</span>
          </nav>
        </div>
      </div>

        <div className="grid grid-cols-3 gap-8 mt-5">
          {/* First Column - Go to Products */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Go to Product page for more Products</h2>
            <Link href="/shop" className="text-gray-600 hover:text-[#FB9D2C]">
              View More
            </Link>
          </div>

          {/* Product Columns */}
          {selectedProducts.map((product, index) => (
            <div key={product._id} className="space-y-6">
              <div className="relative aspect-square bg-[#F9F1E7] p-8">
                <button
                  onClick={() => removeProduct(product._id)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="text-lg">Rs.{product.price.toLocaleString()}</p>
                <StarRating 
                  rating={index === 0 ? 4.7 : 4.2} 
                  reviews={index === 0 ? 204 : 114} 
                />
              </div>
            </div>
          ))}

          {/* Add Product Column */}
          {selectedProducts.length < 2 && (
            <div className="relative">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Add A Product</h3>
                <div className="relative">
                  <button
                    onClick={() => setShowProductList(!showProductList)}
                    className="w-full flex items-center justify-between gap-2 px-4 py-2 bg-[#FB9D2C] text-white rounded hover:bg-[#FB9D2C]/90"
                  >
                    Choose a Product
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {showProductList && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-50 max-h-[300px] overflow-y-auto">
                      {availableProducts.map((product) => (
                        <button
                          key={product._id}
                          onClick={() => addProduct(product)}
                          className="w-full flex items-center gap-2 p-2 hover:bg-gray-100 text-left"
                        >
                          <div className="relative h-12 w-12 flex-shrink-0">
                            <Image
                              src={product.imageUrl || "/placeholder.svg"}
                              alt={product.title}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <span>{product.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

