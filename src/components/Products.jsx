import React, {useEffect, useState} from 'react'

import {ProductCard, Grid} from './common'

import FeaturedProductsData from '../utils/mocks/en-us/featured-products.json'

const Products = ({viewType}) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        setData(FeaturedProductsData.results)
    }, [data])
    return (
        <section className='categories'>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
                {
                    data?.map((item, index) => 
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

export default Products