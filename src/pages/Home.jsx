import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

import {HeroSlider, Helmet, Categories, Products} from '../components'
import {Button} from '../components/common'
import Section, {SectionBody, SectionTitle} from '../components/common/Section'

import {VIEW_TIPE} from '../utils/constants'

//Hocks
import {useFeaturedProducts} from '../utils/hooks/useFeaturedProducts'


const Home = ({navigate}) => {

  const [loading, setLoading] = useState(true)
  const {data, isLoading} = useFeaturedProducts()

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])

  return (
    <Helmet title="Home Page">
      <HeroSlider 
        controls={true} 
        auto={true} 
        timeOut={5000} />

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
          {
            !loading && 
            <Products viewType={VIEW_TIPE.FEATURED_PRODUCTS} data={data?.results} />
          }
          
        </SectionBody>
      </Section>
      <Link to='/products'>
        <Button 
          animate={false} 
          size='block'
        >
          <i className='bx bx-store'/> View all products
        </Button>
      </Link>
      
    {/* End Articles section*/}
    </Helmet>
  )
}

Home.propTypes = {
  navigate: PropTypes.func,
}

export default Home