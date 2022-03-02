import React from 'react'

import ProductCategories from '../utils/mocks/en-us/product-categories.json'

import {CategoryCard} from './common'

const Categories = () => {
    const data = ProductCategories.results
    console.log(data)
  return (
    <section className='categories'>
        {
            data?.map((item, index) => 
                <CategoryCard categoryName={item.data.name} mainImage={item.data.main_image} />
            )
        }
    </section>
  )
}

export default Categories