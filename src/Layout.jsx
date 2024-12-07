import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Components/Nav'
import { SideBar } from './Components/SideBar'

const Layout = () => {
  return (
    <div className='w-screen min-h-screen'>
    <Nav />
    <SideBar Outlet={<Outlet />} />
    </div>
  )
}

export default Layout
