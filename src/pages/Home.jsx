import React from 'react'

import {HeroSlider, Helmet} from '../components'

const Home = () => {
  return (
    <Helmet title="Home Page">
      <HeroSlider controls={true} auto={false} timeOut={5000} />
    </Helmet>
  )
}

export default Home