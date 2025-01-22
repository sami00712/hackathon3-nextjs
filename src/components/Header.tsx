"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, User, Heart, ShoppingCart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Cart } from "./Cart"
import { Wishlist } from "./Wishlist"
import { useStore } from "@/context/StoreContext"
import { AdminLoginModal } from "./AdminLoginModel"
import Image from "next/image"

export function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showWishlist, setShowWishlist] = useState(false)
  const [showAdminLogin, setShowAdminLogin] = useState(false)
  const { cart, wishlist } = useStore()

  return (
    <>
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
          <div className="flex items-center ">
            <Image src={'/images/logo.png'} alt="0" width={70} height={100}/>
            <h1 className="text-2xl font-bold">Furniro</h1>
          </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-[#B88E2F]">
                Home
              </Link>
              <Link href="/shop" className="hover:text-[#B88E2F]">
                Shop
              </Link>
              <Link href="/blog" className="hover:text-[#B88E2F]">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-[#B88E2F]">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              {showSearch && (
                <div className="absolute left-0 right-0 top-16 bg-white p-4 border-b shadow-sm animate-in slide-in-from-top">
                  <Input type="search" placeholder="Search..." className="max-w-md mx-auto" />
                </div>
              )}
              <button onClick={() => setShowSearch(!showSearch)}>
                <Search className="h-5 w-5" />
              </button>
              <button onClick={() => setShowAdminLogin(true)}>
                <User className="h-5 w-5" />
              </button>
              <button onClick={() => setShowWishlist(true)} className="relative">
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 text-xs flex items-center justify-center bg-[#B88E2F] text-white rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button onClick={() => setShowCart(true)} className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 text-xs flex items-center justify-center bg-[#B88E2F] text-white rounded-full">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <Cart isOpen={showCart} onClose={() => setShowCart(false)} />
      <Wishlist isOpen={showWishlist} onClose={() => setShowWishlist(false)} />
      <AdminLoginModal isOpen={showAdminLogin} onClose={() => setShowAdminLogin(false)} />
    </>
  )
}

