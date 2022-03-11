import React from 'react'
import PropTypes from 'prop-types'

import {LAYOUT_VIEW} from '../utils/constants'

import logo from '../assets/images/logo.webp'

const Navbar = ({navigate}) => {

  return (
    <header className="header">
        <div className="logo" onClick={navigate ? () => navigate(LAYOUT_VIEW.HOME) : null}> 
          <img src={logo} alt='logo' data-testid="company-logo" /> 
          <span data-testid="company-name">shopie</span> 
        </div>

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

Navbar.propTypes = {
  navigate: PropTypes.func,
}

export default Navbar