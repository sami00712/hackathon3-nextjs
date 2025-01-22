// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { Star, Heart, Minus, Plus } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Label } from "@/components/ui/label"
// import { useStore } from "@/context/StoreContext"
// import { useToast } from "@/components/ui/toast"
// import type { Product } from "@/types/product"
// import Products from "./Products"
// import { Tabs } from "./tabs"

// interface ProductDetailsProps {
//   product: Product
// }

// export function ProductDetails({ product }: ProductDetailsProps) {
//   const [quantity, setQuantity] = useState(1)
//   const { addToCart, addToWishlist } = useStore()
//   const { showToast } = useToast()

//   const handleAddToCart = () => {
//     addToCart({ ...product, quantity })
//     showToast(`Added ${quantity} ${product.title} to cart`)
//   }

//   const handleAddToWishlist = () => {
//     addToWishlist(product)
//     showToast(`Added ${product.title} to wishlist`)
//   }

//   return (
//     <div>
//     <div className="grid gap-8 lg:grid-cols-2">
//       <div className="relative aspect-square">
//         <Image
//           src={product.imageUrl || "/placeholder.svg"}
//           alt={product.title}
//           fill
//           className="object-cover rounded-lg"
//         />
//       </div>
//       <div className="space-y-6">
//         <h1 className="text-4xl font-medium">{product.title}</h1>
//         <div className="flex items-center gap-4">
//           <div className="flex">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className={`h-5 w-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
//               />
//             ))}
//           </div>
//           <span className="text-sm text-gray-500">5 Customer Review</span>
//         </div>
//         <div className="text-2xl">
//           Rs. {product.price.toLocaleString()}
//           {product.discountPercentage && (
//             <span className="ml-2 text-lg text-gray-500 line-through">
//               Rs. {((product.price * 100) / (100 - product.discountPercentage)).toLocaleString()}
//             </span>
//           )}
//         </div>
//         <p className="text-gray-600">{product.description}</p>
//         <div className="space-y-4">
//           <div>
//             <h3 className="mb-2 font-medium">Size</h3>
//             <RadioGroup defaultValue="l" className="flex gap-4">
//               {["L", "XL", "XS"].map((size) => (
//                 <Label
//                   key={size}
//                   className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100"
//                 >
//                   <RadioGroupItem value={size.toLowerCase()} id={`size-${size.toLowerCase()}`} />
//                   {size}
//                 </Label>
//               ))}
//             </RadioGroup>
//           </div>
//           <div>
//             <h3 className="mb-2 font-medium">Color</h3>
//             <RadioGroup defaultValue="blue" className="flex gap-4">
//               {["#3A5463", "#B88E2F"].map((color) => (
//                 <Label
//                   key={color}
//                   className="border cursor-pointer rounded-full p-1 flex items-center gap-2 [&:has(:checked)]:ring-2 [&:has(:checked)]:ring-black"
//                 >
//                   <RadioGroupItem value={color} id={`color-${color}`} className="sr-only" />
//                   <div className="h-6 w-6 rounded-full" style={{ backgroundColor: color }} />
//                 </Label>
//               ))}
//             </RadioGroup>
//           </div>
//           <div className="flex items-center gap-6">
//             <div className="flex items-center border border-gray-300">
//               <button className="px-4 py-2 hover:bg-gray-100" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
//                 <Minus className="h-4 w-4" />
//               </button>
//               <span className="px-4 py-2">{quantity}</span>
//               <button className="px-4 py-2 hover:bg-gray-100" onClick={() => setQuantity(quantity + 1)}>
//                 <Plus className="h-4 w-4" />
//               </button>
//             </div>
//             <Button className="bg-[#B88E2F] hover:bg-[#A17922] text-white" onClick={handleAddToCart}>
//               Add To Cart
//             </Button>
//             <button className="rounded-full p-2 hover:bg-gray-100" onClick={handleAddToWishlist}>
//               <Heart className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//         <div className="space-y-2 border-t pt-6">
//           <div className="flex gap-2 text-sm text-gray-600">
//             <span className="font-medium">SKU:</span>
//             <span>{product._id}</span>
//           </div>
//           <div className="flex gap-2 text-sm text-gray-600">
//             <span className="font-medium">Category:</span>
//             <span>{product.tags?.[0] || "N/A"}</span>
//           </div>
//           <div className="flex gap-2 text-sm text-gray-600">
//             <span className="font-medium">Tags:</span>
//             <span>{product.tags?.join(", ") || "N/A"}</span>
//           </div>
//         </div>
//       </div>
      
//     </div>
//     <div className="mt-24">
//           <Tabs
//             tabs={[
//               {
//                 label: "Description",
//                 content: (
//                   <div className="prose max-w-none">
//                     <p>
//                       Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
//                     </p>
//                     <p className="mt-4">
//                       Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
//                     </p>
//                     <div className="mt-8 grid md:grid-cols-2 gap-8">
//                       <Image
//                         src="/images/grp2.png"
//                         alt="Product image 1"
//                         width={600}
//                         height={300}
//                         className="rounded-lg"
//                       />
//                       <Image
//                         src="/images/grp.png"
//                         alt="Product image 2"
//                         width={600}
//                         height={300}
//                         className="rounded-lg"
//                       />
//                     </div>
                    
//                   </div>
//                 ),
//               },
//               {
//                 label: "Additional Information",
//                 content: <div>Additional information content</div>,
//               },
//               {
//                 label: "Reviews [5]",
//                 content: <div>Reviews content</div>,
//               },
//             ]}
//           />
//         </div>
//         <h1 className="my-3 text-4xl font-bold text-center">Related Products</h1>
//         <Products/>
//     </div>
//   )
// }





"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Heart, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "./ui/label"
import { useStore } from "@/context/StoreContext"
import { useToast } from "@/components/ui/toast"
import type { Product, CartItem } from "@/types/product"
import Products from "./Products"
import { Tabs } from "./tabs"

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart, addToWishlist } = useStore()
  const { showToast } = useToast()

  const handleAddToCart = () => {
    addToCart({ ...product, quantity } as CartItem)
    showToast(`Added ${quantity} ${product.title} to cart`)
  }

  const handleAddToWishlist = () => {
    addToWishlist(product)
    showToast(`Added ${product.title} to wishlist`)
  }

  return (
    <div>
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="relative aspect-square">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="space-y-6">
        <h1 className="text-4xl font-medium">{product.title}</h1>
        <div className="flex items-center gap-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">5 Customer Review</span>
        </div>
        <div className="text-2xl">
          Rs. {product.price.toLocaleString()}
          {product.discountPercentage && (
            <span className="ml-2 text-lg text-gray-500 line-through">
              Rs. {((product.price * 100) / (100 - product.discountPercentage)).toLocaleString()}
            </span>
          )}
        </div>
        <p className="text-gray-600">{product.description}</p>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 font-medium">Size</h3>
            <div className="flex gap-4">
              {["L", "XL", "XS"].map((size) => (
                <label key={size} className="flex items-center">
                  <input type="radio" name="size" value={size} className="sr-only" />
                  <span className="px-3 py-2 border rounded-md cursor-pointer hover:bg-gray-100">{size}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-medium">Color</h3>
            <div className="flex gap-4">
              {["#3A5463", "#B88E2F"].map((color) => (
                <label key={color} className="flex items-center">
                  <input type="radio" name="color" value={color} className="sr-only" />
                  <span
                    className="w-6 h-6 rounded-full border-2 border-gray-300 cursor-pointer"
                    style={{ backgroundColor: color }}
                  ></span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center border border-gray-300">
              <button className="px-4 py-2 hover:bg-gray-100" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button className="px-4 py-2 hover:bg-gray-100" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button className="bg-[#B88E2F] hover:bg-[#A17922] text-white" onClick={handleAddToCart}>
              Add To Cart
            </Button>
            <button className="rounded-full p-2 hover:bg-gray-100" onClick={handleAddToWishlist}>
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
            <span>{product.tags?.[0] || "N/A"}</span>
          </div>
          <div className="flex gap-2 text-sm text-gray-600">
            <span className="font-medium">Tags:</span>
            <span>{product.tags?.join(", ") || "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-24">
           <Tabs
            tabs={[
              {
                label: "Description",
                content: (
                  <div className="prose max-w-none">
                    <p>
                      Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                    </p>
                    <p className="mt-4">
                      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                    </p>
                    <div className="mt-8 grid md:grid-cols-2 gap-8">
                      <Image
                        src="/images/grp2.png"
                        alt="Product image 1"
                        width={600}
                        height={300}
                        className="rounded-lg"
                      />
                      <Image
                        src="/images/grp.png"
                        alt="Product image 2"
                        width={600}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                    
                  </div>
                ),
              },
              {
                label: "Additional Information",
                content: <div>Additional information content</div>,
              },
              {
                label: "Reviews [5]",
                content: <div>Reviews content</div>,
              },
            ]}
          />
        </div>
    <h1 className="my-3 text-4xl font-bold text-center">Related Products</h1>
        <Products/>
    </div>
  )
}

