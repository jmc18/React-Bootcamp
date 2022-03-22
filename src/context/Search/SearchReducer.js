import * as searchActions from './SearchActions'

const SearchReducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case searchActions.SEARCH_RESULT_START:
      return {
        ...state,
        searchTerm: payload.searchTerm,
        currentPage: payload.currentPage,
        isLoading: payload.isLoading
      }
    case searchActions.GET_DATA_FROM_SEARCH:
      return {
        ...state,
        results: payload.results,
        totalPages: payload.totalPages,
        currentPage: payload.currentPage,
        searchTerm: payload.searchTerm,
        isLoading: payload.isLoading
      }
    case searchActions.START_PAGINATION:
      return {
        ...state,
        currentPage: payload.currentPage,
        isLoading: payload.isLoading
      }
    default:
      return state
  }
}

export default SearchReducer
