import React from 'react'

import {HeroSlider, Helmet, Categories, Products} from '../components'
import Section ,{SectionBody, SectionTitle} from '../components/common/Section'

const Home = () => {
  return (
    <Helmet title="Home Page">
      <HeroSlider controls={true} auto={true} timeOut={5000} />

    {/* Category section */}
      <Section>
        <SectionTitle>
          Categories
        </SectionTitle>
        <SectionBody>
          <Categories />
        </SectionBody>
      </Section>
    {/* End category section */}

    {/* Articles section */}
      <Section>
        <SectionTitle>
          Featured Products
        </SectionTitle>
        <SectionBody>
          <Products viewType="featuredProducts" />
        </SectionBody>
      </Section>
    {/* End Articles section*/}
    </Helmet>
  )
}

export default Home