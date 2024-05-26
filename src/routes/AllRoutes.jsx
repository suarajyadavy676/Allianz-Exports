import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainBody from '../components/MainBody'
import Terms from './Terms'
import Refund from './Refund'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainBody/>}/>
        <Route path='/terms'element={<Terms/>}/>
        <Route path='/refund'element={<Refund/>}/>
        <Route path=''element={<h1>hi</h1>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
