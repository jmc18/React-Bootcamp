import React, {useState, useEffect} from 'react'

import ProductCategories from '../utils/mocks/en-us/product-categories.json'

import {CategoryCard, Grid} from './common'

const Categories = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    setData(ProductCategories.results)
  },[data])

  return (
    <section className='categories'>
      <Grid col={5} mdCol={2} smCol={1} gap={20}>
        {
            data?.map((item, index) => 
              <CategoryCard 
                  key={index} 
                  categoryName={item.data.name} 
                  imageUrl={item.data.main_image.url}
                  altImage={item.data.main_image.alt} />
            )
        }
        </Grid>
    </section>
  )
}

export default Categories