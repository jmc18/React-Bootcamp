import React, {useState} from 'react'
import PropTypes from 'prop-types'

import {VIEW_TIPE, PAGINATION_TYPE} from '../utils/constants'

import {ProductCard, Grid, NotFound, Pagination} from './common'

const Products = ({viewType, data, pageSize}) => {

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(Math.ceil(data?.results / pageSize))
    const [productPage, setProductPage] = useState(data?.results.slice(0, totalPages))

    const handlerPagination = (action) => {
        if(action === PAGINATION_TYPE.PREV) {
            
        } else {

        }
    }

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
                                productId={item.id}
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
    pageSize: PropTypes.number,
}

export default Products