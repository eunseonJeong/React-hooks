import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function Home2() {
  return (
    <div>
        <Header/>
        <h1>This is App2</h1>

        <Outlet />

    </div>
  )
}

export default Home2