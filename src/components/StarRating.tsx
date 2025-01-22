'use client'

import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  reviews?: number
  size?: 'sm' | 'md'
}

export function StarRating({ rating, reviews, size = 'md' }: StarRatingProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${
              star <= Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
            } ${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'}`}
          />
        ))}
      </div>
      {reviews !== undefined && (
        <span className="text-sm text-gray-600">
          {rating} | {reviews} Reviews
        </span>
      )}
    </div>
  )
}

