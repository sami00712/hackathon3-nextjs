"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { CustomButton } from "@/components/ui/custom-button"
import { CustomSelect } from "@/components/ui/custom-select"
import type { Order } from "@/types/order"
import React from "react"

interface TabProps {
  label: string
  children: React.ReactNode
}

const Tab: React.FC<TabProps> = ({ label, children }) => {
  return <div>{children}</div>
}

interface TabsProps {
  children: React.ReactNode
  activeTab: string
  onTabChange: (tab: string) => void
}

const Tabs: React.FC<TabsProps> = ({ children, activeTab, onTabChange }) => {
  return (
    <div>
      <div className="flex border-b">
        {React.Children.map(children, (child) => {
          if (React.isValidElement<TabProps>(child)) {
            return (
              <button
                className={`px-4 py-2 ${activeTab === child.props.label ? "border-b-2 border-blue-500" : ""}`}
                onClick={() => onTabChange(child.props.label)}
              >
                {child.props.label}
              </button>
            )
          }
          return null
        })}
      </div>
      <div className="py-4">
        {React.Children.map(children, (child) => {
          if (React.isValidElement<TabProps>(child) && child.props.label === activeTab) {
            return child.props.children
          }
          return null
        })}
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([])
  const [activeTab, setActiveTab] = useState<"pending" | "completed">("pending")
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const adminPassword = localStorage.getItem("adminPassword")
    if (adminPassword !== "sami-admin") {
      router.push("/")
    } else {
      setIsAuthorized(true)
      fetchOrders()
    }
  }, [router])

  const fetchOrders = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/orders")
      if (!response.ok) {
        throw new Error("Failed to fetch orders")
      }
      const data = await response.json()
      setOrders(data)
    } catch (error) {
      console.error("Error fetching orders:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (isAuthorized) {
      const interval = setInterval(fetchOrders, 30000) // Fetch orders every 30 seconds
      return () => clearInterval(interval)
    }
  }, [isAuthorized])

  const pendingOrders = orders.filter((order) => order.status === "pending")
  const completedOrders = orders.filter((order) => order.status === "completed")

  const totalSales = completedOrders.reduce((sum, order) => sum + order.total, 0)

  const chartData = orders.reduce(
    (acc, order) => {
      const date = new Date(order.date).toLocaleDateString()
      const existingEntry = acc.find((entry) => entry.name === date)
      if (existingEntry) {
        existingEntry.sales += order.total
      } else {
        acc.push({ name: date, sales: order.total })
      }
      return acc
    },
    [] as { name: string; sales: number }[],
  )

  const handleStatusChange = async (orderId: string, newStatus: "pending" | "completed") => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (!response.ok) {
        throw new Error("Failed to update order status")
      }

      // Update the local state
      setOrders((prevOrders) =>
        prevOrders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)),
      )
    } catch (error) {
      console.error("Error updating order status:", error)
    }
  }

  if (!isAuthorized) {
    return null // or a loading indicator
  }

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-gray-500 text-sm">Total Sales</h3>
              <p className="text-2xl font-bold">Rs. {totalSales.toLocaleString()}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-gray-500 text-sm">Pending Orders</h3>
              <p className="text-2xl font-bold">{pendingOrders.length}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-gray-500 text-sm">Completed Orders</h3>
              <p className="text-2xl font-bold">{completedOrders.length}</p>
            </div>
          </div>
        </div>

        {/* Sales Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#B88E2F" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <Tabs activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab as "pending" | "completed")}>
            <Tab label="pending">
              <OrdersTable orders={pendingOrders} onStatusChange={handleStatusChange} />
            </Tab>
            <Tab label="completed">
              <OrdersTable orders={completedOrders} onStatusChange={handleStatusChange} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

interface OrdersTableProps {
  orders: Order[]
  onStatusChange: (orderId: string, newStatus: "pending" | "completed") => void
}

function OrdersTable({ orders, onStatusChange }: OrdersTableProps) {
  if (!orders || orders.length === 0) {
    return <div className="text-center py-4">No orders found.</div>
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-4 px-4">Order ID</th>
            <th className="text-left py-4 px-4">Date</th>
            <th className="text-left py-4 px-4">Customer</th>
            <th className="text-left py-4 px-4">Products</th>
            <th className="text-left py-4 px-4">Total</th>
            <th className="text-left py-4 px-4">Status</th>
            <th className="text-left py-4 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="py-4 px-4">{order.id}</td>
              <td className="py-4 px-4">{new Date(order.date).toLocaleDateString()}</td>
              <td className="py-4 px-4">{`${order.formData.firstName} ${order.formData.lastName}`}</td>
              <td className="py-4 px-4">
                {order.products &&
                  order.products.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 mb-2">
                      <Image
                        src={item.product.imageUrl || "/placeholder.svg"}
                        alt={item.product.title}
                        width={40}
                        height={40}
                        className="object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{item.product.title}</p>
                        <p className="text-sm text-gray-500">
                          Size: {item.size}, Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
              </td>
              <td className="py-4 px-4">Rs. {order.total.toLocaleString()}</td>
              <td className="py-4 px-4">
                <span
                  className={`
                  inline-block px-2 py-1 rounded-full text-xs
                  ${order.status === "completed" ? "bg-green-100 text-green-800" : ""}
                  ${order.status === "pending" ? "bg-yellow-100 text-yellow-800" : ""}
                `}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </td>
              <td className="py-4 px-4">
                <CustomSelect
                  options={[
                    { value: "pending", label: "Pending" },
                    { value: "completed", label: "Completed" },
                  ]}
                  value={order.status}
                  onChange={(newStatus) => onStatusChange(order.id, newStatus as "pending" | "completed")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

