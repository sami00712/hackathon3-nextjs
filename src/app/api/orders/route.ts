import { NextResponse } from "next/server"
import type { Product } from "@/types/product"

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


// This is a mock database. In a real application, you'd use a proper database.
const orders: Order[] = [
  {
    id: "1",
    date: "2023-05-01T12:00:00Z",
    formData: {
      firstName: "John",
      lastName: "Doe",
      country: "US",
    },
    products: [
      {
        product: {
          _id: "prod1",
          title: "Elegant Chair",
          price: 199.99,
          imageUrl: "/images/chair.jpg",
        },
        quantity: 2,
        size: "M",
      },
    ],
    total: 399.98,
    status: "pending",
  },
  // Add more mock orders here
]

export async function POST(request: Request) {
  const order = await request.json()
  order.id = Date.now().toString() // Generate a unique ID
  orders.push(order)
  return NextResponse.json({ message: "Order created successfully", order })
}

export async function GET() {
  return NextResponse.json(orders)
}

