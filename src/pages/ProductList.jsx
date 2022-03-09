import React, {useRef, useState} from 'react'

import {Helmet, Products} from '../components'
import {Button, CheckBox} from '../components/common'

import productCategories from '../utils/mocks/en-us/product-categories.json'
import producst from '../utils/mocks/en-us/products.json'

const ProductList = () => {

  const [filter, setFilter] = useState([])

  const filterSelect = (checked, item) => {
    if(checked){
      setFilter([...filter, item.id])
    } else {
      const newFilter = filter.filter(x => x !== item.id)
      setFilter(newFilter)
    }
  }

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
                  productCategories && 
                  productCategories?.results?.map((item) => (
                    <div key={item.id} className="product-list__filter__widget__content__item">
                      <CheckBox
                          label={item?.data?.name}
                          onChange={(input) => filterSelect(input.checked, item)}
                          checked={filter.includes(item.id)}
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
          <Products data={producst} viewType='ProductList' />
        </div>

      </div>
    </Helmet>
  )
}

export default ProductList