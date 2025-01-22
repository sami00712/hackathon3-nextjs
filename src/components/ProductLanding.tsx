import { ProductDetails } from "./ProductDetails"
import type { Product } from "@/types/product"

interface ProductLandingProps {
  product: Product
}

export function ProductLanding({ product }: ProductLandingProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails product={product} />
      {/* Additional sections can be added here, such as:
          - Related products
          - Product reviews
          - Product specifications
          - etc. */}
    </div>
  )
}

