// import { Product } from '@/types/product'
// import { ProductCard } from '@/components/product-card'

// async function getProducts() {
//   const res = await fetch(
//     'https://6wo2r8dl.api.sanity.io/v2025-01-18/data/query/production?query=*%5B_type+%3D%3D+%22product%22%5D+%7B%0A++_id%2C%0A++title%2C%0A++description%2C%0A++price%2C%0A++%22discountPercentage%22%3A+dicountPercentage%2C+%2F%2F+Correcting+the+typo%0A++isNew%2C%0A++%22imageUrl%22%3A+productImage.asset-%3Eurl%2C%0A++_createdAt%2C%0A++_updatedAt%2C%0A++tags%0A%7D%0A'
//   )
//   const data = await res.json()
//   return data.result as Product[]
// }

// export default async function Page() {
//   const products = await getProducts()

//   return (
//     <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
//       <h1 className="text-center text-3xl font-bold">Our Products</h1>
//       <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
//         {products.map((product) => (
//           <ProductCard key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   )
// }

// import { Header } from '@/components/Header'
import HeroSection from '@/components/hero-section'
import BrowseRange from '@/components/browse-range'
import RoomInspiration from '@/components/room-inspiration'
import Products from '@/components/Products'
import InstagramFeed from '@/components/instagram-feed'


export default function Home(){
  return (
    <div>
      <HeroSection/>
      <BrowseRange/>
      <h1 className='my-3 text-4xl font-bold text-center'>Our Products</h1>
       <Products/>
      <RoomInspiration/>
      <InstagramFeed/>
    </div>
  )
}

