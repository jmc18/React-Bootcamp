import React from 'react'

const Navbar = () => {
  return (
    <header class="header">
        <a href="home.html" class="logo"> <i class="bx bx-store" /> shopie </a>

        <form class="search-form">
            <input type="search" id="search-box" placeholder="search here..." />
            <label for="search-box" class="bx bx-search">{}</label>
        </form>

        <div class="icons">
            <a href="cart.html">
            <i className="bx bx-shopping-bag" />
            <span>0</span>
            </a>
        </div>
    </header>
  )
}

export default Navbar