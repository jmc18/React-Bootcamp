import React from 'react'

import {HeroSlider, Helmet, Categories} from '../components'

const Home = () => {
  return (
    <Helmet title="Home Page">
      <HeroSlider controls={true} auto={true} timeOut={5000} />
      <Categories />
    </Helmet>
  )
}

export default Home