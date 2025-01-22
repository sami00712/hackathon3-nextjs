import { notFound } from "next/navigation"
import type { Product } from "@/types/product"
import { ProductLanding } from "@/components/ProductLanding"

async function getProduct(id: string) {
  const res = await fetch(
    `https://6wo2r8dl.api.sanity.io/v2025-01-18/data/query/production?query=*%5B_type+%3D%3D+%22product%22+%26%26+_id+%3D%3D+%22${id}%22%5D%5B0%5D+%7B%0A++_id%2C%0A++title%2C%0A++description%2C%0A++price%2C%0A++%22discountPercentage%22%3A+dicountPercentage%2C%0A++isNew%2C%0A++%22imageUrl%22%3A+productImage.asset-%3Eurl%2C%0A++_createdAt%2C%0A++_updatedAt%2C%0A++tags%0A%7D%0A`,
  )
  const data = await res.json()
  return data.result as Product
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return <ProductLanding product={product} />
}

