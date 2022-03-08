import React from 'react'
import PropTypes from 'prop-types'

import {ProductCard, Grid} from './common'

const Products = ({viewType, data}) => {
    return (
        <section className='categories'>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
                {
                    data?.results?.map((item, index) => 
                        <ProductCard 
                            key={index}
                            img1={item.data.mainimage.url}
                            img2={item.data?.images[0]?.image?.url}
                            name={item.data.name}
                            price={item.data.price}
                            slug={item?.slugs[0]}
                            alt={item.data.mainimage.alt}
                        />   
                    )
                }
            </Grid>
        </section>
    )
}

Products.propTypes = {
    data: PropTypes.object.isRequired,
    viewType: PropTypes.string,
  }

export default Products