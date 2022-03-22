import { GET_CATEGORIES } from './CategoryActions'

const CategoryReducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload
      }
    default:
      return state
  }
}

export default CategoryReducer
