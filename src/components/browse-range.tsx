import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    title: "Dining",
    image: "/images/op1.png",
  },
  {
    title: "Living",
    image: "/images/op2.png",
  },
  {
    title: "Bedroom",
    image: "/images/op3.png",
  },
]

export default function BrowseRange() {
  return (
    <section className="py-16 mx-auto bg-white">
      <div className="container px-4 ml-6">
        <h2 className="text-2xl font-bold text-center mb-2">Browse The Range</h2>
        <p className="text-center text-[#616161] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={`/category/${category.title.toLowerCase()}`}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={category.image}
                alt={category.title}
                className="object-cover transition-transform group-hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

