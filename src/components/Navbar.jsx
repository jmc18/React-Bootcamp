import React from 'react'

import logo from '../assets/images/logo.webp'

const Navbar = () => {
  return (
    <header className="header">
        <a href="/" className="logo"> 
          <img src={logo} alt='logo' data-testid="company-logo" /> 
          <span data-testid="company-name">shopie</span> 
        </a>

        <form className="search-form">
            <input type="search" id="search-box" placeholder="search here..." />
            <label htmlFor="search-box" className="bx bx-search">{}</label>
        </form>

        <div className="icons">
            <a href="/">
            <i className="bx bx-shopping-bag" />
            <span>0</span>
            </a>
        </div>
    </header>
  )
}

export default Navbar