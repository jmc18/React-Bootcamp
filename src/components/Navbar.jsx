import React from 'react'

const Navbar = () => {
  return (
    <header className="header">
        <a href="/" className="logo"> <i className="bx bx-store" /> shopie </a>

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