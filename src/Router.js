import React from 'react'

//
import HomePage from './pages/home/Index'
import NavBar from './navbar/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <>
      {/*  */}
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
