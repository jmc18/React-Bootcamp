import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import {Button} from './index'
 
import {useFeaturedBanners} from '../utils/hooks/useFeaturedBanners'

function HeroSlider ({controls, auto, timeOut}) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [dataSlider, setDataSlider] = useState({})

  const {data, isLoading} = useFeaturedBanners()

  const nextSlide = useCallback(
    () => {
        const index = activeSlide + 1 === dataSlider.length ? 0 : activeSlide + 1
        setActiveSlide(index)
    },
    [activeSlide, dataSlider]
  )

  const prevSlide = () => {
    const index = activeSlide - 1 < 0 ? dataSlider.length - 1 : activeSlide - 1
    setActiveSlide(index)
  }

  useEffect(() => {
    setDataSlider(data.results)
    if (auto) {
        const slideAuto = setInterval(() => {
            nextSlide()
        }, (timeOut ?? 3000));
        return () => {
            clearInterval(slideAuto)
        }
    }
  }, [nextSlide, timeOut, auto, data])

  return (
    <div className="hero-slider">
            {
              !isLoading ? (
                dataSlider?.map((item, index) => (
                  <HeroSliderItem key={index} item={item} active={index === activeSlide}/>
              ))
              ) : null
            }
            {
                controls ? (
                    <div className="hero-slider__control">
                        <div className="hero-slider__control__item" onClick={prevSlide}>
                            <i className="bx bx-chevron-left" />
                        </div>
                        <div className="hero-slider__control__item">
                            <div className="index">
                                {activeSlide + 1}/{data.length}
                            </div>
                        </div>
                        <div className="hero-slider__control__item" onClick={nextSlide}>
                            <i className="bx bx-chevron-right" />
                        </div>
                    </div>
                ) : null
            }
        </div>
  )
}

HeroSlider.propTypes = {
  controls: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
}

const HeroSliderItem = props => (
  <div className={`hero-slider__item ${props.active ? 'active' : ''}`}>
      <div className="hero-slider__item__info">
          <div className={`hero-slider__item__info__title `}>
              <span>{props.item.title}</span>
          </div>
          <div className="hero-slider__item__info__description">
              <span>{}</span>
          </div>
          <div className="hero-slider__item__info__btn">
              
                  <Button
                      backgroundColor={props.item.color}
                      icon="bx bx-cart"
                      animate={true}
                  >
                      xem chi tiết
                  </Button>
              
          </div>
      </div>
      <div className="hero-slider__item__image">
          <div className={`shape bg-prymary`}>{}</div>
          <img src={props.item.data.main_image.url} alt="" />
      </div>
  </div>
)

export default HeroSlider