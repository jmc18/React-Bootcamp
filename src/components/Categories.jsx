import React, {useContext } from 'react'

//CategoryContext
import CategoryContext from '../context/Category/CategoryContext'

import {CategoryCard, Grid, Loading} from './common'

const Categories = ({data}) => {

  const {categories} = useContext(CategoryContext)

  return !categories ? <Loading text='Loading Categories...' styles={{height: '100%'}}/> :
    <section className='categories'>
      <Grid col={5} mdCol={2} smCol={1} gap={20}>
        {
          categories?.map((item) => 
              <CategoryCard 
                  key={item.id} 
                  categoryName={item.data.name} 
                  imageUrl={item.data.main_image.url}
                  altImage={item.data.main_image.alt}
                  categoryId={item.id} />
            )
        }
        </Grid>
    </section>
}

export default Categories