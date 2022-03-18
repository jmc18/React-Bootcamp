import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CategoryCard = ({ categoryName, imageUrl, altImage, categoryId }) => {
  return (
    <Link to={`/products?category=${categoryId}`}>
      <div className="category-card">
        <img src={imageUrl} alt={altImage} />
        <span>{categoryName}</span>
      </div>
    </Link>
  )
}

CategoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  altImage: PropTypes.string,
  categoryId: PropTypes.string.isRequired
}

export default CategoryCard
