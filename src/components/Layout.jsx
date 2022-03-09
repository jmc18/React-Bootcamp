import React, { useState } from 'react'
import {Home, ProductList} from '../pages'
import {Footer, Navbar} from './index'

function Layout () {

  const [pageToRender, setPageToRender] = useState('Home')

  const handleNavigation = (page) => {
    setPageToRender(page)
  }

  return (
    <div className='page-container'>
        <Navbar navigate={pageToRender !== 'Home' ? handleNavigation : null} />
        <div className='container'>
          <div className='main'>
              {
                pageToRender === 'Home' ? 
                    <Home navigate={handleNavigation} /> 
                    : <ProductList />
              }
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Layout