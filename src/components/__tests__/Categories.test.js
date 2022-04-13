import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Categories } from '../'
import CategoryContext from '../../context/Category/CategoryContext'
import { mockProductCategories } from '../../utils/mocks/en-us/product-categories'

jest.mock('../../utils/hooks/useGeneralRequest.js', () => ({
  useGeneralRequest: jest.fn()
}))

describe('Product Category Component', () => {
  afterEach(() => {
    jest.resetModules()
  })

  test('It should render the component loading when the data is being retrieved', () => {
    //Arrage
    render(
      <CategoryContext.Provider value={{ categories: null }}>
        <Categories />
      </CategoryContext.Provider>
    )
    // get by Text defined in the navBar
    const loadingComponent = screen.getByText('Loading Categories...')
    //Assert
    expect(loadingComponent).toBeInTheDocument()
  })

  test('It should render the category component', () => {
    //Arrage
    render(
      <CategoryContext.Provider value={{ categories: mockProductCategories?.results }}>
        <Categories />
      </CategoryContext.Provider>,
      { wrapper: BrowserRouter }
    )
    // get by Text defined in the navBar
    const loadingComponent = screen.getByTestId('category-component')
    //Assert
    expect(loadingComponent).toBeInTheDocument()
  })
})
