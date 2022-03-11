import React, { useState } from 'react'
import {Home, ProductList} from '../pages'
import {Footer, Navbar} from './index'
import {LAYOUT_VIEW} from '../utils/constants'

const Layout = () => {

  const [pageToRender, setPageToRender] = useState(LAYOUT_VIEW.HOME)

  const handleNavigation = (page) => {
    setPageToRender(page)
  }

  return (
    <div className='page-container'>
        <Navbar navigate={pageToRender !== LAYOUT_VIEW.HOME ? handleNavigation : null} />
        <div className='container'>
          <div className='main'>
              {
                pageToRender === LAYOUT_VIEW.HOME ? 
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