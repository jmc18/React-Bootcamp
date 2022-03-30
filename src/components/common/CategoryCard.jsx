import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ErrorBoundary } from '../'

const CategoryCard = ({ categoryName, imageUrl, altImage, categoryId }) => {
  return (
    <ErrorBoundary text="Error trying to render category">
      <Link to={`/products?category=${categoryId}`}>
        <div className="category-card">
          <img src={imageUrl} alt={altImage} />
          <span>{categoryName}</span>
        </div>
      </Link>
    </ErrorBoundary>
  )
}

CategoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  altImage: PropTypes.string,
  categoryId: PropTypes.string.isRequired
}

export default CategoryCard
