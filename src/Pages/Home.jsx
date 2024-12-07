import React from 'react'
import { Hero } from '../Components/Hero'
import BentoGrid from '../Components/BentoGrid'
import { ProductGrid } from '../Components/ProductGrid'

const Home = () => {
  return (
    <>
    <div className='w-full min-h-64  lg:h-full relative bg-gray-500'>
      <Hero />
    <ProductGrid section="Cloths"/>
    <ProductGrid section="Buy some shoes as.."/>
    
    </div>
    </>
  )
}

export default Home