import React, { useRef, useEffect } from 'react'


import logo from '../assets/images/logo.webp'

const Navbar = () => {
    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')
  return (
    <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <a href='/'>
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left' />
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className='bx bx-chevron-left' />
                        </div>
                        {
                          
                        }
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-search" />
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <a href='#'>
                                <i className="bx bx-shopping-bag" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar