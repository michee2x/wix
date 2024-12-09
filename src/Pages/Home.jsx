import React from 'react'
import { Hero } from '../Components/Hero'
import BentoGrid from '../Components/BentoGrid'
import { ProductGrid } from '../Components/ProductGrid'
import Stats from '../Components/Stats'
import Reviews from '../Components/Reviews'
import Portfolio from '../Components/Portfolio'

export const Home = () => {
  return (
    <>
    <div className='w-full bg-gray-900 min-h-64 relative'>
      <Hero />
      <Stats />
      <Portfolio />
      <Reviews />
    <ProductGrid section="Featured Products"/>
    
    </div>
    </>
  )
}