import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function Layout({children}) {
  return (
    <div>
        <Header/>
        <div>
            <Outlet/>
            {children}
        </div>
    </div>
  )
}

export default Layout

