'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Home, Trash2 } from 'lucide-react'
import { useStore } from '@/context/StoreContext'
import { Button } from '@/components/ui/button'
// import { Header } from '@/components/Header'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useStore()
  const router = useRouter()

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white">
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

        
        <div className="text-center text-black mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cart</h1>
          
          
          <nav className="flex justify-center items-center space-x-2 text-sm md:text-base">
            <Link href="/" className="hover:text-amber-500 transition-colors">
              Home
            </Link>
            <span className="text-black">›</span>
            <span className="text-black">Cart</span>
          </nav>
        </div>
      </div>
    </div> 
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <Link href="/shop">
            <button>Continue Shopping</button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <div className="bg-[#F9F1E7] py-16 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Cart</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="text-[#B88E2F]">
              <Home className="h-4 w-4" />
            </Link>
            <span>/</span>
            <span>Cart</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="bg-[#FFF6F4] p-4 mb-8">
          <div className="grid grid-cols-4 gap-4 font-medium">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {cart.map((item) => (
            <div key={item._id} className="grid grid-cols-4 gap-4 items-center">
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24 flex-shrink-0">
                  <Image
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-medium">{item.title}</h3>
              </div>
              <div>Rs. {item.price.toLocaleString()}</div>
              <div>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item._id, parseInt(e.target.value) || 1)}
                  className="w-20 p-2 border rounded-md"
                />
              </div>
              <div className="flex items-center justify-between">
                <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4">
          <Button 
            variant="outline"
            onClick={() => router.push('/compare')}
          >
            Compare
          </Button>
          <Button 
            className="bg-[#B88E2F] hover:bg-[#A17922] text-white"
            onClick={() => router.push('/checkout')}
          >
            Check Out
          </Button>
        </div>
      </div>
    </div>
  )
}

