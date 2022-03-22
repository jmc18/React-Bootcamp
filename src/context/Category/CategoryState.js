import React, { useReducer, useRef, useEffect } from 'react'

import CategoryContext from './CategoryContext'
import CategoryReducer from './CategoryReducer'

//Actions
import { GET_CATEGORIES } from './CategoryActions'

//Hook
import { useGeneralRequest } from '../../utils/hooks/useGeneralRequest'

const CategoryState = ({ children }) => {
  const requestPart = `q=${encodeURIComponent('[[at(document.type, "category")]]')}&lang=en-us&pageSize=30`
  const { data, isLoading } = useGeneralRequest(requestPart)
  const componentMounted = useRef(true)

  const categoryInitialState = {
    categories: null
  }

  const [state, dispatch] = useReducer(CategoryReducer, categoryInitialState)

  useEffect(() => {
    if (componentMounted.current && !isLoading) {
      dispatch({
        type: GET_CATEGORIES,
        payload: data.results
      })
    }
  }, [data, isLoading])

  return <CategoryContext.Provider value={{ categories: state.categories }}>{children}</CategoryContext.Provider>
}

export default CategoryState
