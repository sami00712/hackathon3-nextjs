import type { Product } from "./product"

export interface Order {
  id: string
  date: string
  formData: {
    firstName: string
    lastName: string
    country: string
    // ... other form fields
  }
  products: {
    product: Product
    quantity: number
    size: string
  }[]
  total: number
  status: "pending" | "completed"
}

