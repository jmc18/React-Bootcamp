import React from 'react'

import { Route, Routes } from 'react-router-dom'

import {Home, ProductList, Product} from '../pages'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/product/:productId' element={<Product />} />
    </Routes>
  )
}

export default AppRoutes