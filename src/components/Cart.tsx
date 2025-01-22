// 'use client'

// import Image from 'next/image'
// import { Minus, Plus } from 'lucide-react'
// import { useStore } from '@/context/StoreContext'
// import { Sidebar } from '@/components/ui/sidebar'
// import { Button } from '@/components/ui/button'
// import { useRouter } from 'next/navigation'

// export function Cart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
//   const { cart, removeFromCart, updateQuantity } = useStore()
//   const router = useRouter()

//   const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

//   return (
//     <Sidebar title="Shopping Cart" isOpen={isOpen} onClose={onClose}>
//       <div className="flex flex-col h-full">
//         <div className="flex-1 p-4 space-y-4">
//           {cart.map((item) => (
//             <div key={item._id} className="flex gap-4 p-2 border rounded-lg">
//               <div className="relative h-20 w-20 flex-shrink-0">
//                 <Image
//                   src={item.imageUrl || "/placeholder.svg"}
//                   alt={item.title}
//                   fill
//                   className="object-cover rounded-md"
//                 />
//               </div>
//               <div className="flex-1">
//                 <div className="flex justify-between">
//                   <h3 className="font-medium">{item.title}</h3>
//                   <button 
//                     onClick={() => removeFromCart(item._id)}
//                     className="text-gray-400 hover:text-gray-600"
//                   >
//                     ×
//                   </button>
//                 </div>
//                 <p className="text-[#B88E2F]">Rs. {item.price.toLocaleString()}</p>
//                 <div className="flex items-center gap-2 mt-2">
//                   <button
//                     onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}
//                     className="p-1 hover:bg-gray-100 rounded"
//                   >
//                     <Minus className="h-4 w-4" />
//                   </button>
//                   <span className="w-8 text-center">{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                     className="p-1 hover:bg-gray-100 rounded"
//                   >
//                     <Plus className="h-4 w-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//           {cart.length === 0 && (
//             <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
//           )}
//         </div>
//         <div className="border-t p-4 space-y-4">
//           <div className="flex justify-between text-lg font-semibold">
//             <span>Subtotal</span>
//             <span>Rs. {subtotal.toLocaleString()}</span>
//           </div>
//           <div className="grid grid-cols-3 gap-2">
//             <Button 
//               variant="outline"
//               onClick={() => {
//                 onClose()
//                 router.push('/cart')
//               }}
//             >
//               Cart
//             </Button>
//             <Button className="bg-[#B88E2F] hover:bg-[#A17922] text-white">
//               Checkout
//             </Button>
//             <Button 
//               variant="outline" 
//               onClick={() => {
//                 onClose()
//                 router.push('/compare')
//               }}
//             >
//               Comparison
//             </Button>
//           </div>
//         </div>
//       </div>
//     </Sidebar>
//   )
// }



















"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Sidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Cart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, removeFromCart, updateQuantity } = useStore();
  const router = useRouter();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sidebar title="Shopping Cart" isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col h-full">
        {/* Cart Items */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {cart.map((item) => (
            <div key={item._id} className="flex gap-4 p-2 border rounded-lg">
              {/* Product Image */}
              <div className="relative h-20 w-20 flex-shrink-0">
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              {/* Product Details */}
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium">{item.title}</h3>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
                <p className="text-[#B88E2F]">Rs. {item.price.toLocaleString()}</p>
                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* Empty Cart Message */}
          {cart.length === 0 && (
            <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
          )}
        </div>

        {/* Subtotal and Actions */}
        <div className="border-t p-4 space-y-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Subtotal</span>
            <span>Rs. {subtotal.toLocaleString()}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              onClick={() => {
                onClose();
                router.push("/cart");
              }}
            >
              View Cart
            </Button>
            <Button
              className="bg-[#B88E2F] hover:bg-[#A17922] text-white"
              onClick={() => {
                onClose();
                router.push("/checkout");
              }}
            >
              Checkout
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                onClose();
                router.push("/compare");
              }}
            >
              Compare
            </Button>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
