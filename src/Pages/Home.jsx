import React from 'react'
import { Hero } from '../Components/Hero'
import BentoGrid from '../Components/BentoGrid'
import { ProductGrid } from '../Components/ProductGrid'
import Stats from '../Components/Stats'
import Reviews from '../Components/Reviews'

export const Home = () => {
  return (
    <>
    <div className='w-full min-h-64 relative bg-gray-500'>
      <Hero />
      <Stats />
      <Reviews />
    <ProductGrid section="Cloths"/>
    <ProductGrid section="Buy some shoes as.."/>
    
    </div>
    </>
  )
}