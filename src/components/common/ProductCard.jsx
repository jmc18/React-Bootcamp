import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Button from './Button'

import numberWithCommas from '../../utils/numberWithCommas'

const ProductCard = ({ img1, img2, name, price, productId, alt }) => {
  return (
    <Link to={`/product/${productId}`}>
      <div className="product-card">
        <div className="image-card">
          <img src={img1} alt={alt} />
          {img2 ? <img src={img2} alt={alt} /> : null}
        </div>
        <h3 className="name">{name}</h3>
        <div className="price">
          ${numberWithCommas(price)}
          <span className="price-old">
            <del>${numberWithCommas(399000)}</del>
          </span>
        </div>

        <div className="btn">
          <Button size="sm" icon="bx bx-cart" animate={true}>
            View Product
          </Button>
        </div>
      </div>
    </Link>
  )
}

ProductCard.propTypes = {
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productId: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default ProductCard
