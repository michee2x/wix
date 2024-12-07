import { useState } from 'react'
import './App.css'
import { Hero } from './Components/Hero'
import { Footer } from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import ProductPage from './Pages/ProductPage'
import { CartPage } from './Pages/CartPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/cart/:id' element={<CartPage />} />
      </Route>

    </Routes>
    
    </BrowserRouter>
    
      
    </>
  )
}

export default App
