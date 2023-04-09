import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Logout from '../pages/Logout'

function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="login" element={<Login />}/>
        <Route path="logout" element={<Logout />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router