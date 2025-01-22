import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t py-12 ">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Funiro.</h3>
            <p className="text-sm text-[#9F9F9F]">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-[#9F9F9F]">Links</h4>
            <nav className="flex flex-col space-y-2 text-sm ">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-[#9F9F9F]">Help</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/payment-options">Payment Options</Link>
              <Link href="/returns">Returns</Link>
              <Link href="/privacy-policies">Privacy Policies</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-[#9F9F9F]">Newsletter</h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-b-2 border-black px-3 py-2 text-sm"
              />
              <button className=" border-b-2 border-black">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 ml-10 text-sm text-[#9F9F9F]">
          <p>2023 furino. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

