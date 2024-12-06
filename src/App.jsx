import { useState } from 'react'
import './App.css'
import { Hero } from './Components/Hero'
import { ProductFeed } from './Sections/ProductFeed'
import { Footer } from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <div className='w-screen min-h-screen'>
      <Hero />
      <ProductFeed />
      <Footer />
    </div>
    </>
  )
}

export default App
