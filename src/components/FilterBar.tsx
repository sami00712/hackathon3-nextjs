'use client'

import { Grid, List } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterBarProps {
  totalProducts: number
  currentView: 'grid' | 'list'
  onViewChange: (view: 'grid' | 'list') => void
  currentPage: number
  productsPerPage: number
}

export default function FilterBar({ 
  totalProducts, 
  currentView, 
  onViewChange,
  currentPage,
  productsPerPage 
}: FilterBarProps) {
  const start = ((currentPage - 1) * productsPerPage) + 1
  const end = Math.min(currentPage * productsPerPage, totalProducts)

  return (
    <div className="flex items-center justify-between py-4 px-6 bg-[#F9F1E7]">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => onViewChange('grid')}>
          <Grid className={`h-5 w-5 ${currentView === 'grid' ? 'text-[#B88E2F]' : ''}`} />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => onViewChange('list')}>
          <List className={`h-5 w-5 ${currentView === 'list' ? 'text-[#B88E2F]' : ''}`} />
        </Button>
        <span className="text-sm text-gray-600">
          Showing {start}-{end} of {totalProducts} results
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Select defaultValue="16">
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Show" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="8">Show 8</SelectItem>
            <SelectItem value="16">Show 16</SelectItem>
            <SelectItem value="32">Show 32</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="default">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

