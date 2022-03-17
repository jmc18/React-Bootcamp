import React, {useRef, useState, useCallback, useEffect, useContext} from 'react'

import {useSearchParams} from "react-router-dom";

import {Helmet, Products} from '../components'
import {Button, CheckBox, Loading} from '../components/common'

import {VIEW_TIPE} from '../utils/constants'

//CategoryContext
import CategoryContext from '../context/Category/CategoryContext'


//Hook
import {useProducts} from '../utils/hooks/useProducts'

const ProductList = () => {

  const [params] = useSearchParams()

  const {categories} = useContext(CategoryContext)

  const {data, isLoading} = useProducts()

  const [filters, setFilters] = useState(params.get('category') ? [params.get('category')] : [])
  const [produsctList, setProdusctList] = useState([])
  const [loading, setLoading] = useState(true)


  const filterSelect = (checked, id) => {
    if(checked){
      setFilters([...filters, id])
    } else {
      const newFilter = filters.filter(x => x !== id)
      setFilters(newFilter)
    }
  }

  const updateProductList = useCallback(
    () => {
      let productsTemp = data?.results
      if(filters.length > 0){
        productsTemp = productsTemp?.filter(x => filters.includes(x?.data?.category?.id))
      }
      setProdusctList(productsTemp)
    },
    [filters, data]
  )

  useEffect(() => {
    setProdusctList(data.results)
    setLoading(isLoading)
  }, [data, isLoading])

  useEffect(() => {
    updateProductList()
  }, [updateProductList])
  

  const filterRef = useRef(null)
  const showFilters = () => filterRef.current.classList.toggle('active')

  return (
    <Helmet title='My E-ccomerce Products'>
      <div className='product-list'>
        <div className='product-list__filter' ref={filterRef}>
          <div className='product-list__filter__close' onClick={() => showFilters()}>
            <i className='bx bx-message-square-x' />
          </div>
          <div className='product-list__filter__widget'>
            <div className='product-list__filter__widget__title'>
              Categories
            </div>
            <div className='product-list__filter__widget__content'>
                {
                  categories && 
                  categories?.map((item) => (
                    <div key={item.id} className="product-list__filter__widget__content__item">
                      <CheckBox
                          label={item?.data?.name}
                          onChange={(input) => filterSelect(input.checked, item.id)}
                          checked={filters.includes(item.id)}
                      />
                    </div>
                  ))
                }
            </div>
          </div>
        </div>

        <div className="product-list__filter__toggle">
            <Button size="sm" handler={() => showFilters()}>Show Filters</Button>
        </div>

        <div className='product-list__content'>
          {
            !loading 
            ? <Products data={produsctList} viewType={VIEW_TIPE.PRODUCT_LIST} />
            : <Loading text='Loading Products...' />
          }
        </div>

      </div>
    </Helmet>
  )
}

export default ProductList