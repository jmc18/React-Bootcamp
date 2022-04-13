import { render, screen } from '@testing-library/react'
import { HeroSlider } from '../'
import { mockFeaturedBannerData } from '../../utils/mocks/en-us/featured-banners'
import { useGeneralRequest } from '../../utils/hooks/useGeneralRequest'

jest.mock('../../utils/hooks/useGeneralRequest.js', () => ({
  useGeneralRequest: jest.fn()
}))

describe('Hero Slider Component', () => {
  afterEach(() => {
    jest.resetModules()
  })

  test('It should render the component loading', () => {
    useGeneralRequest.mockImplementation(() => ({ data: null, isLoading: true }))
    //Arrage
    render(<HeroSlider />)
    // get by Text defined in the navBar
    const loadingComponent = screen.getByText('Loading HeroSlider...')
    //Assert
    expect(loadingComponent).toBeInTheDocument()
  })

  test('It should render the slider', () => {
    useGeneralRequest.mockImplementation(() => ({ data: mockFeaturedBannerData, isLoading: false }))
    //Arrage
    render(<HeroSlider />)
    // get by TestIds defined in the navBar
    const slideActive = screen.getByTestId('slides')
    //const loadingComponent = screen.getByText('Loading HeroSlider...')
    //Assert
    expect(slideActive).toBeInTheDocument()
    expect(useGeneralRequest.data).not.toBeNull()
  })
})
