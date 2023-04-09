import React from 'react'
import { Outlet } from 'react-router-dom'

function Header() {
  return (
    <div>
      <p>헤더입니다!!!!!</p>
      <Outlet />
    </div>
  )
}

export default Header