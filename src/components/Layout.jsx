import React from 'react'

import {Home} from '../pages'
import {Footer, Navbar} from './index'

const Layout = () => {
  return (
    <div className='page-container'>
        <Navbar />
        <div className='container'>
          <div className='main'>
              <Home />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Layout