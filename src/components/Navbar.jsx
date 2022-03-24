import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import CartContext from '../context/Cart/CartContext'

import logo from '../assets/images/logo.webp'

const Navbar = () => {
  const cartContext = useContext(CartContext)
  const navigate = useNavigate()
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="logo" data-testid="company-logo" />
          <span data-testid="company-name">shopie</span>
        </div>
      </Link>

      <Formik
        initialValues={{ searchTerm: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.searchTerm) {
            errors.searchTerm = 'Required'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          navigate(`/search?q=${values.searchTerm}`)
        }}
      >
        <Form className="search-form">
          <Field type="search" name="searchTerm" component="input" placeholder="search here..." />
          <ErrorMessage name="email" component="div" />
          <button type="submit" className="bx bx-search" />
        </Form>
      </Formik>

      <div className="icons">
        <Link to="/cart" title="Go To Shopping Cart">
          <i className="bx bx-shopping-bag" />
          {cartContext.state.items.length > 0 && (
            <span>{cartContext.state.items.length >= 10 ? '+9' : cartContext.state.items.length} </span>
          )}
        </Link>
      </div>
    </header>
  )
}

export default Navbar
