import React from 'react'
import { Hero } from '../Components/Hero'
import BentoGrid from '../Components/BentoGrid'
import { ProductGrid } from '../Components/ProductGrid'

const Home = () => {
  return (
    <>
    <Hero />
    <ProductGrid section="Cloths"/>
    <ProductGrid section="Buy some shoes as.."/>
    
    </>
  )
}

export default Home