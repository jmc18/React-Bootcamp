import React from 'react'
import PropTypes from 'prop-types'

import {CategoryCard, Grid} from './common'

const Categories = ({data}) => {

  return (
    <section className='categories'>
      <Grid col={5} mdCol={2} smCol={1} gap={20}>
        {
            data?.results?.map((item, index) => 
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

Categories.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Categories