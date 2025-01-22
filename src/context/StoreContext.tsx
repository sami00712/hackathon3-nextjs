// // "use client"

// // import type React from "react"
// // import { createContext, useContext, useState, useEffect } from "react"
// // import type { Product, CartItem } from "@/types/product"
// // import { useToast } from "@/components/ui/toast"

// // interface StoreContextType {
// //   cart: CartItem[]
// //   wishlist: Product[]
// //   addToCart: (product: Product) => void
// //   removeFromCart: (productId: string) => void
// //   updateQuantity: (productId: string, quantity: number) => void
// //   addToWishlist: (product: Product) => void
// //   removeFromWishlist: (productId: string) => void
// //   clearCart: () => void
// // }

// // const StoreContext = createContext<StoreContextType | undefined>(undefined)

// // export function StoreProvider({ children }: { children: React.ReactNode }) {
// //   const [cart, setCart] = useState<CartItem[]>([])
// //   const [wishlist, setWishlist] = useState<Product[]>([])
// //   const { showToast } = useToast()

// //   // Load cart from localStorage on mount
// //   useEffect(() => {
// //     const savedCart = localStorage.getItem("cart")
// //     const savedWishlist = localStorage.getItem("wishlist")
// //     if (savedCart) setCart(JSON.parse(savedCart))
// //     if (savedWishlist) setWishlist(JSON.parse(savedWishlist))
// //   }, [])

// //   // Save cart to localStorage whenever it changes
// //   useEffect(() => {
// //     localStorage.setItem("cart", JSON.stringify(cart))
// //   }, [cart])

// //   // Save wishlist to localStorage whenever it changes
// //   useEffect(() => {
// //     localStorage.setItem("wishlist", JSON.stringify(wishlist))
// //   }, [wishlist])

// //   const addToCart = (product: Product) => {
// //     setCart((prevCart) => {
// //       const existingItem = prevCart.find((item) => item._id === product._id)
// //       if (existingItem) {
// //         showToast(`Updated quantity of ${product.title} in cart`)
// //         return prevCart.map((item) => (item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item))
// //       }
// //       showToast(`Added ${product.title} to cart`)
// //       return [...prevCart, { ...product, quantity: 1 }]
// //     })
// //   }

// //   const removeFromCart = (productId: string) => {
// //     const product = cart.find((item) => item._id === productId)
// //     if (product) {
// //       showToast(`Removed ${product.title} from cart`)
// //     }
// //     setCart((prevCart) => prevCart.filter((item) => item._id !== productId))
// //   }

// //   const updateQuantity = (productId: string, quantity: number) => {
// //     setCart((prevCart) => prevCart.map((item) => (item._id === productId ? { ...item, quantity } : item)))
// //   }

// //   const addToWishlist = (product: Product) => {
// //     setWishlist((prevWishlist) => {
// //       if (!prevWishlist.some((item) => item._id === product._id)) {
// //         showToast(`Added ${product.title} to wishlist`)
// //         return [...prevWishlist, product]
// //       }
// //       return prevWishlist
// //     })
// //   }

// //   const removeFromWishlist = (productId: string) => {
// //     const product = wishlist.find((item) => item._id === productId)
// //     if (product) {
// //       showToast(`Removed ${product.title} from wishlist`)
// //     }
// //     setWishlist((prevWishlist) => prevWishlist.filter((item) => item._id !== productId))
// //   }

// //   const clearCart = () => {
// //     setCart([])
// //     showToast("Cart cleared")
// //   }

// //   return (
// //     <StoreContext.Provider
// //       value={{
// //         cart,
// //         wishlist,
// //         addToCart,
// //         removeFromCart,
// //         updateQuantity,
// //         addToWishlist,
// //         removeFromWishlist,
// //         clearCart,
// //       }}
// //     >
// //       {children}
// //     </StoreContext.Provider>
// //   )
// // }

// // export function useStore() {
// //   const context = useContext(StoreContext)
// //   if (context === undefined) {
// //     throw new Error("useStore must be used within a StoreProvider")
// //   }
// //   return context
// // }







// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";
// import type { Product, CartItem } from "@/types/product";
// import { useToast } from "@/components/ui/toast";

// interface StoreContextType {
//   cart: CartItem[];
//   wishlist: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (productId: string) => void;
//   updateQuantity: (productId: string, quantity: number) => void;
//   addToWishlist: (product: Product) => void;
//   removeFromWishlist: (productId: string) => void;
//   clearCart: () => void;
// }

// const StoreContext = createContext<StoreContextType | undefined>(undefined);

// export function StoreProvider({ children }: { children: React.ReactNode }) {
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [wishlist, setWishlist] = useState<Product[]>([]);
//   const { showToast } = useToast();

//   // Load cart and wishlist from localStorage on mount
//   useEffect(() => {
//     try {
//       const savedCart = localStorage.getItem("cart");
//       const savedWishlist = localStorage.getItem("wishlist");
//       if (savedCart) setCart(JSON.parse(savedCart));
//       if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
//     } catch (error) {
//       console.error("Failed to load cart or wishlist from localStorage:", error);
//     }
//   }, []);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     try {
//       localStorage.setItem("cart", JSON.stringify(cart));
//     } catch (error) {
//       console.error("Failed to save cart to localStorage:", error);
//     }
//   }, [cart]);

//   // Save wishlist to localStorage whenever it changes
//   useEffect(() => {
//     try {
//       localStorage.setItem("wishlist", JSON.stringify(wishlist));
//     } catch (error) {
//       console.error("Failed to save wishlist to localStorage:", error);
//     }
//   }, [wishlist]);

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item._id === product._id);
//       if (existingItem) {
//         showToast(`Updated quantity of ${product.title} in cart`);
//         return prevCart.map((item) =>
//           item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       showToast(`Added ${product.title} to cart`);
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (productId: string) => {
//     setCart((prevCart) => {
//       const product = prevCart.find((item) => item._id === productId);
//       if (product) {
//         showToast(`Removed ${product.title} from cart`);
//       }
//       return prevCart.filter((item) => item._id !== productId);
//     });
//   };

//   const updateQuantity = (productId: string, quantity: number) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item._id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
//       )
//     );
//   };

//   const addToWishlist = (product: Product) => {
//     setWishlist((prevWishlist) => {
//       if (!prevWishlist.some((item) => item._id === product._id)) {
//         showToast(`Added ${product.title} to wishlist`);
//         return [...prevWishlist, product];
//       }
//       return prevWishlist;
//     });
//   };

//   const removeFromWishlist = (productId: string) => {
//     setWishlist((prevWishlist) => {
//       const product = prevWishlist.find((item) => item._id === productId);
//       if (product) {
//         showToast(`Removed ${product.title} from wishlist`);
//       }
//       return prevWishlist.filter((item) => item._id !== productId);
//     });
//   };

//   const clearCart = () => {
//     setCart([]);
//     showToast("Cart cleared");
//   };

//   return (
//     <StoreContext.Provider
//       value={{
//         cart,
//         wishlist,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         addToWishlist,
//         removeFromWishlist,
//         clearCart,
//       }}
//     >
//       {children}
//     </StoreContext.Provider>
//   );
// }

// export function useStore() {
//   const context = useContext(StoreContext);
//   if (context === undefined) {
//     throw new Error("useStore must be used within a StoreProvider");
//   }
//   return context;
// }




"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Product, CartItem } from "@/types/product"
import { useToast } from "@/components/ui/toast"

interface StoreContextType {
  cart: CartItem[]
  wishlist: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  clearCart: () => void
}

const StoreContext = createContext<StoreContextType | undefined>(undefined)

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<Product[]>([])
  const { showToast } = useToast()

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist))
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id)
      if (existingItem) {
        showToast(`Updated quantity of ${product.title} in cart`)
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
        )
      }
      showToast(`Added ${product.title} to cart`)
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: string) => {
    const product = cart.find((item) => item._id === productId)
    if (product) {
      showToast(`Removed ${product.title} from cart`)
    }
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    setCart((prevCart) => prevCart.map((item) => (item._id === productId ? { ...item, quantity } : item)))
  }

  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some((item) => item._id === product._id)) {
        showToast(`Added ${product.title} to wishlist`)
        return [...prevWishlist, product]
      }
      return prevWishlist
    })
  }

  const removeFromWishlist = (productId: string) => {
    const product = wishlist.find((item) => item._id === productId)
    if (product) {
      showToast(`Removed ${product.title} from wishlist`)
    }
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item._id !== productId))
  }

  const clearCart = () => {
    setCart([])
    showToast("Cart cleared")
  }

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        addToWishlist,
        removeFromWishlist,
        clearCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider")
  }
  return context
}

