import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ProductList } from '../'
import { Products } from '../../components'
import CategoryContext from '../../context/Category/CategoryContext'
import { mockProducts } from '../../utils/mocks/en-us/products'
import { mockProductCategories } from '../../utils/mocks/en-us/product-categories'
import { useGeneralRequest } from '../../utils/hooks/useGeneralRequest'
import { VIEW_TIPE } from '../../utils/constants'

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

  test('It should render the category sidebar', () => {
    useGeneralRequest.mockImplementation(() => ({ data: mockProducts, isLoading: false }))
    //Arrage
    render(
      <CategoryContext.Provider value={{ categories: mockProductCategories.results }}>
        <ProductList />
      </CategoryContext.Provider>,
      { wrapper: BrowserRouter }
    )
    const categorySection = screen.getByText('Categories')
    //Assert
    expect(categorySection).toBeInTheDocument()
  })

  test('It should render pagination', () => {
    useGeneralRequest.mockImplementation(() => ({ data: mockProducts, isLoading: false }))
    //Arrage
    render(
      <CategoryContext.Provider value={{ categories: mockProductCategories.results }}>
        <ProductList />
      </CategoryContext.Provider>,
      { wrapper: BrowserRouter }
    )
    const paginationControl = screen.getByTestId('pagination-control')
    //Assert
    expect(paginationControl).toBeInTheDocument()
  })

  test('It shouldn´t render pagination', () => {
    useGeneralRequest.mockImplementation(() => ({ data: mockProducts, isLoading: false }))
    //Arrage
    render(
      <CategoryContext.Provider value={{ categories: mockProductCategories.results }}>
        <ProductList>
          <Products data={mockProducts.results} viewType={VIEW_TIPE.PRODUCT_LIST} pageSize={50} />
        </ProductList>
      </CategoryContext.Provider>,
      { wrapper: BrowserRouter }
    )
    const paginationControl = screen.findAllByTestId('pagination-control')
    //Assert
    expect(paginationControl).toBeNull
  })

  test('It should not render pagination', () => {
    useGeneralRequest.mockImplementation(() => ({ data: mockProducts, isLoading: false }))
    //Arrage
    render(
      <CategoryContext.Provider value={{ categories: mockProductCategories.results }}>
        <ProductList>
          <Products data={mockProducts.results} viewType={VIEW_TIPE.PRODUCT_LIST} pageSize={50} />
        </ProductList>
      </CategoryContext.Provider>,
      { wrapper: BrowserRouter }
    )
    const paginationControl = screen.findAllByTestId('pagination-control')
    //Assert
    expect(paginationControl).toBeNull
  })
})
