'use client'

import Image from 'next/image'
import { useStore } from '@/context/StoreContext'
import { Sidebar } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'

export function Wishlist({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { wishlist, removeFromWishlist, addToCart } = useStore()

  return (
    <Sidebar title="Wishlist" isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col h-full">
        <div className="flex-1 p-4 space-y-4">
          {wishlist.map((item) => (
            <div key={item._id} className="flex gap-4 p-2 border rounded-lg">
              <div className="relative h-20 w-20 flex-shrink-0">
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium">{item.title}</h3>
                  <button 
                    onClick={() => removeFromWishlist(item._id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
                <p className="text-[#B88E2F]">Rs. {item.price.toLocaleString()}</p>
                <Button 
                  onClick={() => {
                    addToCart(item)
                    removeFromWishlist(item._id)
                  }}
                  variant="outline"
                  size="sm"
                  className="mt-2"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
          {wishlist.length === 0 && (
            <p className="text-center text-gray-500 mt-8">Your wishlist is empty</p>
          )}
        </div>
      </div>
    </Sidebar>
  )
}

