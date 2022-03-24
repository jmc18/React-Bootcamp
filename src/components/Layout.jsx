import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import { Footer, Navbar } from './index'

//Context
import CategoryState from '../context/Category/CategoryState'
import SearchState from '../context/Search/SearchState'
import CartState from '../context/Cart/CartState'

//Routes
import AppRoutes from '../routes/AppRoutes'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="page-container">
        <CartState>
          <CategoryState>
            <SearchState>
              <Navbar />
              <div className="container">
                <div className="main">
                  <AppRoutes />
                </div>
              </div>
              <Footer />
            </SearchState>
          </CategoryState>
        </CartState>
      </div>
    </BrowserRouter>
  )
}

export default Layout
