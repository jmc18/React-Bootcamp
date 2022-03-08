import React from 'react'

import {HeroSlider, Helmet, Categories, Products} from '../components'
import {Button} from '../components/common'
import Section, {SectionBody, SectionTitle} from '../components/common/Section'

//Mock data
import featuredBannersData from '../utils/mocks/en-us/featured-banners.json'
import productCategoriesData from '../utils/mocks/en-us/product-categories.json'
import featuredProductsData from '../utils/mocks/en-us/featured-products.json'

const Home = () => {
  return (
    <Helmet title="Home Page">
      <HeroSlider controls={true} auto={true} timeOut={5000} data={featuredBannersData} />

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
        onclick={() => {return alert('Clicked')}}
      >
        <i className='bx bx-store'/> View all products
      </Button>
    {/* End Articles section*/}
    </Helmet>
  )
}

export default Home