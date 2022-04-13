import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Home } from '../'
import CategoryContext from '../../context/Category/CategoryContext'
import { mockFeaturedBannerData } from '../../utils/mocks/en-us/featured-banners'
import { mockFeaturedProductsData } from '../../utils/mocks/en-us/featured-products'
import { mockProductCategories } from '../../utils/mocks/en-us/product-categories'
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
      </CategoryContext.Provider>,
      { wrapper: BrowserRouter }
    )
    const heroSliderComponent = screen.getByTestId('hero-slider-testid')
    //Assert
    expect(heroSliderComponent).toBeInTheDocument()
  })

  test('It should render the category section', () => {
    useGeneralRequest.mockImplementation(() => ({ data: null, isLoading: true }))
    //Arrage
    render(
      <CategoryContext.Provider value={{ categories: mockProductCategories.results }}>
        <Home />
      </CategoryContext.Provider>,
      { wrapper: BrowserRouter }
    )
    const categoryComponent = screen.getByTestId('category-component')
    //Assert
    expect(categoryComponent).toBeInTheDocument()
  })

  test('It should render the featured products grid', () => {
    useGeneralRequest.mockImplementation(() => ({ data: null, isLoading: true }))
    useGeneralRequest.mockImplementation(() => ({ data: mockFeaturedProductsData, isLoading: false }))
    //Arrage
    render(
      <CategoryContext.Provider value={{ categories: mockProductCategories.results }}>
        <Home />
      </CategoryContext.Provider>,
      { wrapper: BrowserRouter }
    )
    const homeProductGrid = screen.getByTestId('home-product-grid')
    //Assert
    expect(homeProductGrid).toBeInTheDocument()
  })
})
