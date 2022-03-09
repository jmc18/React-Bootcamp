import React from 'react'
import PropTypes from 'prop-types'

import {ProductCard, Grid, Button, NotFound} from './common'

const Products = ({viewType, data}) => {
    return (
        data.length > 0 ? renderProdcustGrid(viewType, data) :
        <NotFound text='Products Not Found'/>
    )
}

const renderProdcustGrid = (viewType, data) => {
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
                viewType === 'ProductList' && pagination()
            }
        </>
    )
}

const pagination = () => {
    
    return (
        <section className='pagination'>
            <Grid col={3} mdCol={3} smCol={3} gap={20}>
                <Button 
                    animate={true}
                    handler={() => {}}
                    size="sm" 
                    icon='bx bx-left-arrow-alt'
                >
                Prev
                </Button>

                <div className='pagination__counter'>
                1/35
                </div>
                

                <Button 
                    animate={true}
                    handler={() => {}}
                    size="sm" 
                    icon='bx bx-right-arrow-alt'
                >
                Next
                </Button>
            </Grid>
        </section>
    )
}

Products.propTypes = {
    data: PropTypes.array.isRequired,
    viewType: PropTypes.string,
}

export default Products