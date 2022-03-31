import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ProductList } from '../'
import CategoryContext from '../../context/Category/CategoryContext'
import { mockProducts } from '../../utils/mocks/en-us/products'
import { mockProductCategories } from '../../utils/mocks/en-us/product-categories'
import { useGeneralRequest } from '../../utils/hooks/useGeneralRequest'

jest.mock('../../utils/hooks/useGeneralRequest.js', () => ({
  useGeneralRequest: jest.fn()
}))

describe('Product list page', () => {
  afterEach(() => {
    jest.resetModules()
  })

  test('It should render the loading component', () => {
    useGeneralRequest.mockImplementation(() => ({ data: { results: [] }, isLoading: true }))
    //Arrage
    render(
      <CategoryContext.Provider value={{ categories: mockProductCategories.results }}>
        <ProductList />
      </CategoryContext.Provider>,
      { wrapper: BrowserRouter }
    )
    const loadingProducts = screen.getByText('Loading Products...')
    //Assert
    expect(loadingProducts).toBeInTheDocument()
  })

  test('It should render the product list', () => {
    useGeneralRequest.mockImplementation(() => ({ data: mockProducts, isLoading: false }))
    //Arrage
    render(
      <CategoryContext.Provider value={{ categories: mockProductCategories.results }}>
        <ProductList />
      </CategoryContext.Provider>,
      { wrapper: BrowserRouter }
    )
    const produstListGrid = screen.getByTestId('produstlist-grid')
    //Assert
    expect(produstListGrid).toBeInTheDocument()
  })
})
