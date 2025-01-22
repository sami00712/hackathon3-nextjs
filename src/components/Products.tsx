// import { Header } from '@/components/Header'
// import  FilterBar  from '@/components/FilterBar'
import { ProductList } from '@/components/ProductList'
import { StoreProvider } from '@/context/StoreContext'
import { Product } from '@/types/product'

async function getProducts() {
  const res = await fetch(
    'https://6wo2r8dl.api.sanity.io/v2025-01-18/data/query/production?query=*%5B_type+%3D%3D+%22product%22%5D+%7B%0A++_id%2C%0A++title%2C%0A++description%2C%0A++price%2C%0A++%22discountPercentage%22%3A+dicountPercentage%2C+%2F%2F+Correcting+the+typo%0A++isNew%2C%0A++%22imageUrl%22%3A+productImage.asset-%3Eurl%2C%0A++_createdAt%2C%0A++_updatedAt%2C%0A++tags%0A%7D%0A'
  )
  const data = await res.json()
  return data.result as Product[]
}

export default async function Products() {
  const products = await getProducts()

  return (
    // <StoreProvider>
    <div>
      {/* <Header /> */}
      <main className="container mx-auto px-4 py-8">
        {/* <FilterBar 
          totalProducts={products.length}
          currentView="grid"
          onViewChange={() => {}}
          currentPage={1}
          productsPerPage={16}
        /> */}
        <div className="mt-8">
          <ProductList products={products} />
        </div>
      </main>
      </div>
   
  )
}

