import React from 'react'
import { Link } from 'react-router-dom'

import { HeroSlider, Helmet, Categories, Products } from '../components'
import { Button, Loading, NotFound } from '../components/common'
import Section, { SectionBody, SectionTitle } from '../components/common/Section'

import { VIEW_TIPE } from '../utils/constants'

//Hocks
import { useGeneralRequest } from '../utils/hooks/useGeneralRequest'

const Home = () => {
  const requestPart = `q=${encodeURIComponent('[[at(document.type, "product")]]')}&q=${encodeURIComponent(
    '[[at(document.tags, ["Featured"])]]'
  )}&lang=en-us&pageSize=16`
  const { data, isLoading } = useGeneralRequest(requestPart)

  return (
    <Helmet title="Home Page">
      <HeroSlider controls={true} auto={true} timeOut={5000} />

      {/* Category section */}
      <Section>
        <SectionTitle>Categories</SectionTitle>
        <SectionBody>
          <Categories />
        </SectionBody>
      </Section>
      {/* End category section */}

      {/* Articles section */}
      <Section>
        <SectionTitle>Featured Products</SectionTitle>
        <SectionBody>
          {isLoading ? (
            <Loading text="Loading Featured Products..." />
          ) : data?.results_size > 0 ? (
            <div data-testid="home-product-grid">
              <Products viewType={VIEW_TIPE.FEATURED_PRODUCTS} data={data?.results} pageSize={1} />
            </div>
          ) : (
            <NotFound text="Featured Product Not Found" />
          )}
        </SectionBody>
      </Section>
      <Link to="/products">
        <Button animate={false} size="block">
          <i className="bx bx-store" /> View all products
        </Button>
      </Link>

      {/* End Articles section*/}
    </Helmet>
  )
}

export default Home
