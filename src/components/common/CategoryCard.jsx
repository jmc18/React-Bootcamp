import React from 'react'
import PropTypes from 'prop-types'


const CategoryCard = ({categoryName, imageUrl, altImage}) => {
  return (
    <div className='category-card'>
      <img src={imageUrl} alt={altImage} />
      <span>{categoryName}</span>
    </div>
  )
}


CategoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  altImage: PropTypes.string,
}

export default CategoryCard