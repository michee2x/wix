import React from 'react'
import { Hero } from '../Components/Hero'
import BentoGrid from '../Components/BentoGrid'
import { ProductGrid } from '../Components/ProductGrid'

export const Home = () => {
  return (
    <>
    <div className='w-full min-h-64 relative bg-gray-500'>
      <Hero />
    <ProductGrid section="Cloths"/>
    <ProductGrid section="Buy some shoes as.."/>
    
    </div>
    </>
  )
}