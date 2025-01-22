"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "./ProductCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Product } from "@/types/product"

interface ProductListProps {
  products: Product[]
}

export function ProductList({ products }: ProductListProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const productsPerPage = 8

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!selectedTag || (product.tags && product.tags.includes(selectedTag))),
    )
  }, [products, searchTerm, selectedTag])

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(filteredProducts.length / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  const allTags = useMemo(() => {
    const tags = products.flatMap((product) => product.tags || [])
    return Array.from(new Set(tags))
  }, [products])

  return (
    <div>
      <div className="mb-4 flex gap-4">
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <select
          value={selectedTag || ""}
          onChange={(e) => setSelectedTag(e.target.value || null)}
          className="border rounded p-2"
        >
          <option value="">All Tags</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-2">
        <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Previous
        </Button>
        {pageNumbers.map((number) => (
          <Button
            key={number}
            onClick={() => setCurrentPage(number)}
            variant={currentPage === number ? "default" : "outline"}
          >
            {number}
          </Button>
        ))}
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pageNumbers.length))}
          disabled={currentPage === pageNumbers.length}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

