import { render, screen } from '@testing-library/react'
import { Home } from '../'
import CategoryContext from '../../context/Category/CategoryContext'
import { mockFeaturedBannerData } from '../../utils/mocks/en-us/featured-banners'
import { mockFeaturedProductsData } from '../../utils/mocks/en-us/featured-products'
import { useGeneralRequest } from '../../utils/hooks/useGeneralRequest'

jest.mock('../../utils/hooks/useGeneralRequest.js', () => ({
  useGeneralRequest: jest.fn()
}))

describe('Home page', () => {
  afterEach(() => {
    jest.resetModules()
  })

  test('It should render the hero slider component', () => {
    useGeneralRequest.mockImplementation(() => ({ data: null, isLoading: true }))
    //Arrage
    render(
      <CategoryContext.Provider value={{ categories: null }}>
        <Home />
      </CategoryContext.Provider>
    )
    // get by Text defined in the navBar
    const heroSliderComponent = screen.getByTestId('hero-slider-testid')
    //Assert
    expect(heroSliderComponent).toBeInTheDocument()
  })
})
