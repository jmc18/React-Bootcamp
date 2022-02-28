import React from 'react'

import {Footer, Navbar} from './'

const Layout = () => {
  return (
    <div className='page-container'>
        <Navbar />
        <div className='container'>
          <div className='main'>
              {}
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Layout