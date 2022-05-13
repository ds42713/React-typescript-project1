import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import ResponsiveNavBar from './ResponsiveNavBar'

function MainLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default MainLayout