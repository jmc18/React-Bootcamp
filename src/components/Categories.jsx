import React, {useContext } from 'react'

//CategoryContext
import CategoryContext from '../context/Category/CategoryContext'

import {CategoryCard, Grid} from './common'

const Categories = ({data}) => {

  const {categories} = useContext(CategoryContext)


  return (
    <section className='categories'>
      <Grid col={5} mdCol={2} smCol={1} gap={20}>
        {
          categories?.map((item, index) => 
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