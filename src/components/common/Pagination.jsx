import React from 'react'
import PropTypes from 'prop-types'

import { Button, Grid } from './'

import { PAGINATION_TYPE } from '../../utils/constants'

const Pagination = ({ activePagination, totalPages, currentPage }) => {
  const handlePagination = (type) => {
    activePagination(type)
  }
  return (
    <section data-testid="pagination-control" className="pagination">
      <Grid col={3} mdCol={3} smCol={3} gap={20}>
        <Button
          isDisabled={currentPage > 1}
          animate={currentPage > 1}
          handler={currentPage > 1 ? () => handlePagination(PAGINATION_TYPE.PREV) : null}
          size="sm"
          icon="bx bx-left-arrow-alt"
        >
          Prev
        </Button>

        <div className="pagination__counter">
          {currentPage} / {totalPages}
        </div>

        <Button
          animate={currentPage < totalPages}
          handler={currentPage < totalPages ? () => handlePagination(PAGINATION_TYPE.NEXT) : null}
          size="sm"
          icon="bx bx-right-arrow-alt"
        >
          Next
        </Button>
      </Grid>
    </section>
  )
}

Pagination.propTypes = {
  activePagination: PropTypes.func,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number
}

export default Pagination
