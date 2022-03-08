import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

import numberWithCommas from '../../utils/numberWithCommas'

const ProductCard = ({img1, img2, name, price, slug, alt}) => {
  return (
    <div className="product-card">
            <a href='/'>
                <div className="image-card">
                    <img src={img1} alt={alt} />
                    {
                        img2 ? <img src={img2} alt={alt} /> : null
                    }
                </div>
                <h3 className="name">{name}</h3>
                <div className="price">
                    ${numberWithCommas(price)}
                    <span className="price-old">
                        <del>${numberWithCommas(399000)}</del>
                    </span>
                </div>
            
            <div className="btn">
                <Button
                    size="sm"    
                    icon="bx bx-cart"
                    animate={true}
                >
                    Buy Now
                </Button>
            </div>
            </a>
        </div>
  )
}

ProductCard.propTypes = {
    img1: PropTypes.string.isRequired,
    img2: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    alt: PropTypes.string,
}

export default ProductCard