import React from 'react'
import { Routes,Route } from 'react-router'
import Home from '../pages/home/Home'
import About from '../pages/about/About'


const MyRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
  
    </Routes>
  )
}

export default MyRouter