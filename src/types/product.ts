export interface Product {
    _id: string
    title: string
    description?: string
    price: number
    discountPercentage?: number
    isNew?: boolean
    imageUrl?: string
    _createdAt?: string
    _updatedAt?: string
    tags?: string[]
  }
  
  export interface CartItem extends Product {
    quantity: number
  }
  