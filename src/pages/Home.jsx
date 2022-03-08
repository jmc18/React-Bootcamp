import React from 'react'
import PropTypes from 'prop-types'

import {HeroSlider, Helmet, Categories, Products} from '../components'
import {Button} from '../components/common'
import Section, {SectionBody, SectionTitle} from '../components/common/Section'

//Mock data
import featuredBannersData from '../utils/mocks/en-us/featured-banners.json'
import productCategoriesData from '../utils/mocks/en-us/product-categories.json'
import featuredProductsData from '../utils/mocks/en-us/featured-products.json'

const Home = ({navigate}) => {

  const handleNavigate = (page) => {
    navigate(page)
  }

  return (
    <Helmet title="Home Page">
      <HeroSlider 
        controls={true} 
        auto={true} 
        timeOut={5000} 
        data={featuredBannersData} />

    {/* Category section */}
      <Section>
        <SectionTitle>
          Categories
        </SectionTitle>
        <SectionBody>
          <Categories data={productCategoriesData} />
        </SectionBody>
      </Section>
    {/* End category section */}

    {/* Articles section */}
      <Section>
        <SectionTitle>
          Featured Products
        </SectionTitle>
        <SectionBody>
          <Products viewType="featuredProducts" data={featuredProductsData} />
        </SectionBody>
      </Section>
      <Button 
        animate={false} 
        size='block'
        handler={() => handleNavigate('ProductList')}
      >
        <i className='bx bx-store'/> View all products
      </Button>
    {/* End Articles section*/}
    </Helmet>
  )
}

Home.propTypes = {
  navigate: PropTypes.func,
}

export default Home