'use client'

import { useState } from 'react'
import { useStore } from '@/context/StoreContext'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Header } from '@/components/Header'

interface FormData {
  firstName: string
  lastName: string
  companyName: string
  country: string
  streetAddress: string
  city: string
  province: string
  zipCode: string
  phone: string
  email: string
  additionalInfo: string
  paymentMethod: 'bank' | 'cash'
}

export default function CheckoutPage() {
  const { cart } = useStore()
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Sri Lanka',
    streetAddress: '',
    city: '',
    province: 'Western Province',
    zipCode: '',
    phone: '',
    email: '',
    additionalInfo: '',
    paymentMethod: 'bank'
  })

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal // Add shipping if needed

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle order submission
    console.log('Order submitted:', { formData, cart, total })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-16">
      <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold mb-8">Billing details</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">Company Name (Optional)</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Country / Region</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="Sri Lanka">Sri Lanka</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">Street Address</label>
              <input
                type="text"
                name="streetAddress"
                required
                value={formData.streetAddress}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="House number and street name"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Town / City</label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Province</label>
              <select
                name="province"
                value={formData.province}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="Western Province">Western Province</option>
                {/* Add other provinces */}
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">ZIP Code</label>
              <input
                type="text"
                name="zipCode"
                required
                value={formData.zipCode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Additional Information</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-2 border rounded"
                placeholder="Notes about your order, e.g. special notes for delivery"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#FFF6F4] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Product</h3>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item._id} className="flex justify-between py-2">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16">
                      <Image
                        src={item.imageUrl || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <span>{item.title} × {item.quantity}</span>
                  </div>
                  <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-[#B88E2F]">Rs. {total.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === 'bank'}
                      onChange={handleInputChange}
                    />
                    <span>Direct Bank Transfer</span>
                  </label>
                  {formData.paymentMethod === 'bank' && (
                    <p className="text-sm text-gray-600 ml-6">
                      Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleInputChange}
                    />
                    <span>Cash On Delivery</span>
                  </label>
                  {formData.paymentMethod === 'cash' && (
                    <p className="text-sm text-gray-600 ml-6">
                      Pay with cash upon delivery.
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
      </div>
    </div>
  )
}

