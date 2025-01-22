import Image from "next/image"


export default function HeroSection() {
  return (
    <div className="relative h-[600px] w-full">
      <Image
        src={'/images/bg.png'}
        alt="bg pic"
        // width={1200}
        // height={100}
        className="object-cover"
        fill
        priority
        sizes="100vw"

        
      />
      <div className="absolute sm:inset-10 lg:inset-32 ml-auto bg-orange-100 lg:w-fit sm:w-auto ">
        <div className="container flex h-full items-center px-4">
          <div className="max-w-lg space-y-4">
            <div className="text-sm font-medium  text-[#3A3A3A]">New Arrival</div>
            <h1 className="text-4xl font-bold text-[#B88E2F]">
              Discover Our
              <br />
              New Collection
            </h1>
            <p className="text-[#616161]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white px-2 py-1">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

