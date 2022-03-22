import React, { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Products } from '../components'
import { NotFound, Loading, Pagination } from '../components/common'
import Section, { SectionBody, SectionTitle } from '../components/common/Section'

import { VIEW_TIPE } from '../utils/constants'

//SearchContext
import SearchContext from '../context/Search/SearchContext'

const Search = () => {
  const searchContext = useContext(SearchContext)
  const [params] = useSearchParams()
  const searchTerm = params.get('q')

  const handlerPagination = (action) => {
    searchContext.triggerPagination(action)
  }

  useEffect(() => {
    searchContext.getSearchResultByTerm(searchTerm)
  }, [searchTerm])

  if (searchContext.state.isLoading) {
    return <Loading text="Loading search..." />
  } else {
    return !searchContext.state.results ? (
      <NotFound text={`No data were obtained with the following search: ${searchTerm}`} />
    ) : (
      <Section>
        <SectionTitle>Search Result For: {searchTerm}</SectionTitle>
        <SectionBody>
          <Products viewType={VIEW_TIPE.SEARCH_LIST} data={searchContext.state.results} pageSize={20} />
          {searchContext.state.totalPages > 1 && (
            <Pagination
              activePagination={handlerPagination}
              totalPages={searchContext.state.totalPages}
              currentPage={searchContext.state.currentPage}
            />
          )}
        </SectionBody>
      </Section>
    )
  }
}

export default Search
