import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'

import { VIEW_TIPE, PAGINATION_TYPE } from '../utils/constants'

import { ProductCard, Grid, NotFound, Pagination } from './common'

const Products = ({ viewType, data, pageSize = 1 }) => {
  const [page, setPage] = useState(0)
  const [totalPages] = useState(pageSize === 1 ? 1 : Math.ceil(data?.length / pageSize))
  const [productsPage, setProductsPage] = useState([])

  const handlerPagination = (action) => {
    if (action === PAGINATION_TYPE.PREV && page > 0) {
      setPage(page - 1)
    } else if (action === PAGINATION_TYPE.NEXT && page + 1 <= totalPages) {
      setPage(page + 1)
    }
  }

  const updateProductList = useCallback(() => {
    setProductsPage(totalPages > 1 ? data?.slice(pageSize * page, pageSize * (page + 1)) : data)
  }, [page, data, pageSize, totalPages])

  useEffect(() => {
    updateProductList()
  }, [updateProductList])

  return !data?.length > 0 ? (
    <NotFound text="Products Not Found" />
  ) : (
    <>
      <section className="categories">
        <Grid col={4} mdCol={2} smCol={1} gap={20}>
          {productsPage?.map((item) => (
            <ProductCard
              key={item.id}
              img1={item.data.mainimage.url}
              img2={item.data?.images[0]?.image?.url}
              name={item.data.name}
              price={item.data.price}
              productId={item.id}
              alt={item.data.mainimage.alt}
            />
          ))}
        </Grid>
      </section>

      {viewType === VIEW_TIPE.PRODUCT_LIST && totalPages > 1 && (
        <Pagination activePagination={handlerPagination} totalPages={totalPages} currentPage={page + 1} />
      )}
    </>
  )
}

Products.propTypes = {
  data: PropTypes.array.isRequired,
  viewType: PropTypes.string,
  pageSize: PropTypes.number
}

export default Products
