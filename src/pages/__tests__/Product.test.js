import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Product } from '../'
import CartContext from '../../context/Cart/CartContext'
import CategoryContext from '../../context/Category/CategoryContext'
import { mockProduct } from '../../utils/mocks/en-us/product'
import { mockProductCategories } from '../../utils/mocks/en-us/product-categories'
import { useGeneralRequest } from '../../utils/hooks/useGeneralRequest'
import { VIEW_TIPE } from '../../utils/constants'

jest.mock('../../utils/hooks/useGeneralRequest.js', () => ({
  useGeneralRequest: jest.fn()
}))

describe('Product page', () => {
  afterEach(() => {
    jest.resetModules()
  })

  test('It should render the loading component', () => {
    useGeneralRequest.mockImplementation(() => ({ data: null, isLoading: true }))

    render(
      <CategoryContext.Provider value={{ categories: mockProductCategories.results }}>
        <Product />
      </CategoryContext.Provider>,
      { wrapper: BrowserRouter }
    )
    const loadingComponent = screen.getByText('Loading product data...')
    const productPage = screen.findAllByTestId('product-details-component')

    //Assert
    expect(loadingComponent).toBeInTheDocument()
    expect(productPage).toBeNull
  })

  test('It should render the not found component', () => {
    useGeneralRequest.mockImplementation(() => ({ data: { results_size: 0 }, isLoading: false }))

    render(
      <CategoryContext.Provider value={{ categories: mockProductCategories.results }}>
        <Product />
      </CategoryContext.Provider>,
      { wrapper: BrowserRouter }
    )

    const notFoundComponent = screen.getByText('Product Not Found')
    const loadingComponent = screen.findAllByText('Loading product data...')
    const productPage = screen.findAllByTestId('product-details-component')

    //Assert
    expect(notFoundComponent).toBeInTheDocument()
    expect(loadingComponent).toBeNull
    expect(productPage).toBeNull
  })

  test('It should render the product details page', () => {
    useGeneralRequest.mockImplementation(() => ({ data: mockProduct, isLoading: false }))

    render(
      <CartContext.Provider value={{ state: { items: [] } }}>
        <CategoryContext.Provider value={{ categories: mockProductCategories.results }}>
          <Product />
        </CategoryContext.Provider>
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    )

    const notFoundComponent = screen.findAllByText('Product Not Found')
    const loadingComponent = screen.findAllByText('Loading product data...')
    const productPage = screen.getByTestId('product-details-component')

    //Assert
    expect(notFoundComponent).toBeNull
    expect(loadingComponent).toBeNull
    expect(productPage).toBeInTheDocument()
  })

  test('It should render the quantity control', () => {
    useGeneralRequest.mockImplementation(() => ({ data: mockProduct, isLoading: false }))

    render(
      <CartContext.Provider value={{ state: { items: [] } }}>
        <CategoryContext.Provider value={{ categories: mockProductCategories.results }}>
          <Product />
        </CategoryContext.Provider>
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    )

    const notFoundComponent = screen.findAllByText('Product Not Found')
    const loadingComponent = screen.findAllByText('Loading product data...')
    const productPage = screen.getByTestId('product-details-component')
    const quantityControl = screen.getByTestId('quantity-control')

    //Assert
    expect(notFoundComponent).toBeNull
    expect(loadingComponent).toBeNull
    expect(productPage).toBeInTheDocument()
    expect(quantityControl).toBeInTheDocument()
  })

  test('It should render the quantity control', () => {
    useGeneralRequest.mockImplementation(() => ({ data: mockProduct, isLoading: false }))

    render(
      <CartContext.Provider value={{ state: { items: [] } }}>
        <CategoryContext.Provider value={{ categories: mockProductCategories.results }}>
          <Product />
        </CategoryContext.Provider>
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    )

    const notFoundComponent = screen.findAllByText('Product Not Found')
    const loadingComponent = screen.findAllByText('Loading product data...')
    const productPage = screen.getByTestId('product-details-component')
    const quantityControl = screen.getByTestId('quantity-control')

    //Assert
    expect(notFoundComponent).toBeNull
    expect(loadingComponent).toBeNull
    expect(productPage).toBeInTheDocument()
    expect(quantityControl).toBeInTheDocument()
  })
})
