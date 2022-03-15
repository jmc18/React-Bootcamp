import React from 'react'
import PropTypes from 'prop-types'

import {VIEW_TIPE} from '../utils/constants'

import {ProductCard, Grid, NotFound, Pagination} from './common'

const Products = ({viewType, data}) => {
    return (
        data?.length > 0 ? renderProductsGrid(viewType, data) :
        <NotFound text='Products Not Found'/>
    )
}

const renderProductsGrid = (viewType, data) => {
    return (
        <>
            <section className='categories'>
                <Grid col={4} mdCol={2} smCol={1} gap={20}>
                    {
                        data?.map((item) => 
                            <ProductCard 
                                key={item.id}
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

            {
                viewType === VIEW_TIPE.PRODUCT_LIST && <Pagination />
            }
        </>
    )
}

Products.propTypes = {
    data: PropTypes.array.isRequired,
    viewType: PropTypes.string,
}

export default Products