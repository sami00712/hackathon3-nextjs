'use client'

import Image from "next/image"

import { ChevronRight } from 'lucide-react'
import { useState } from "react"

const rooms = [
  {
    id: 1,
    number: "01",
    type: "Bed Room",
    title: "Inner Peace",
    image: "/images/rt.png"
  },
  {
    id: 2,
    number: "02",
    type: "Living Room",
    title: "Modern Space",
    image: "/images/rt2.png"
  },
]

export default function RoomInspiration() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % rooms.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-16 px-4 bg-pink-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 lg:max-w-[480px]">
            <h2 className="text-[40px] leading-[1.2] font-bold text-[#3A3A3A]">
              50+ Beautiful rooms
              inspiration
            </h2>
            <p className="text-[#616161] text-lg">
              Our designer already made a lot of beautiful
              prototipe of rooms that inspire you
            </p>
            <button 
              className="h-[48px] px-[40px] bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white"
            >
              Explore More
            </button>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={rooms[currentSlide].image}
                alt={rooms[currentSlide].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-6">
                <div className="flex items-center gap-2 text-sm text-[#616161] mb-2">
                  <span>{rooms[currentSlide].number}</span>
                  <span>—</span>
                  <span>{rooms[currentSlide].type}</span>
                </div>
                <h3 className="text-[28px] font-semibold text-[#3A3A3A]">
                  {rooms[currentSlide].title}
                </h3>
              </div>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#B88E2F] text-white flex items-center justify-center hover:bg-[#B88E2F]/90 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {rooms.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors
                    ${index === currentSlide ? 'bg-[#B88E2F]' : 'bg-[#D8D8D8]'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

