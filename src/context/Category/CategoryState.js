import React, {useReducer, useRef, useEffect} from 'react'

import CategoryContext from './CategoryContext'
import CategoryReducer from './CategoryReducer'

//Actions
import {GET_CATEGORIES} from './CategoryActions'

//Hook
import {useProductCategories} from '../../utils/hooks/useProductCategories'

const CategoryState = ({children}) => {

    const { data, isLoading } = useProductCategories();
    const componentMounted = useRef(true);

    const categoryInitialState = {
        categories: null,
    }

    const [state, dispatch] = useReducer(CategoryReducer, categoryInitialState)

    useEffect(() => {
        if(componentMounted.current && !isLoading) {
            dispatch({
                type: GET_CATEGORIES,
                payload: data.results,
            })
        }
    }, [data, isLoading])
    
    return (
        <CategoryContext.Provider value={{categories: state.categories}}>
            {children}
        </CategoryContext.Provider>
    )

}



export default CategoryState