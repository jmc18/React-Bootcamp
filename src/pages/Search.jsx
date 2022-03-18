import React from 'react'
import { useSearchParams } from 'react-router-dom'

import { Products } from '../components'
import { NotFound, Loading } from '../components/common'
import Section, { SectionBody, SectionTitle } from '../components/common/Section'

import { VIEW_TIPE } from '../utils/constants'

//Hook
import { useSearchTerm } from '../utils/hooks/useSearchTerm'

const Search = () => {
  const [params] = useSearchParams()
  const searchTerm = params.get('q')
  const { data, isLoading } = useSearchTerm(searchTerm)

  if (isLoading) {
    return <Loading text="Loading search..." />
  } else {
    console.log(data)
    return data.results_size === 0 ? (
      <NotFound text={`No data were obtained with the following search: ${searchTerm}`} />
    ) : (
      <Section>
        <SectionTitle>Search Result For: {searchTerm}</SectionTitle>
        <SectionBody>
          {isLoading ? (
            <Loading text="Loading Featured Products..." />
          ) : data?.results_size > 0 ? (
            <Products viewType={VIEW_TIPE.PRODUCT_LIST} data={data?.results} pageSize={10} />
          ) : (
            <NotFound text="Featured Product Not Found" />
          )}
        </SectionBody>
      </Section>
    )
  }
}

export default Search
