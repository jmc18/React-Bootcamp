import { render, screen } from '@testing-library/react'
import { Navbar } from './'
import logoPhat from '../assets/images/logo.webp'

describe('Navbar component', () => {
  test('Renders the logo and name correctly', () => {
    //Arrage
    render(<Navbar />)

    // get by TestIds defined in the navBar
    const companyLogo = screen.getByTestId('company-logo')
    const companyName = screen.getByTestId('company-name')

    //Assert
    expect(companyLogo).toBeInTheDocument()
    expect(companyLogo).toHaveAttribute('src', logoPhat)
    expect(companyName).toBeInTheDocument()
    expect(companyName).toHaveTextContent(/shopie/i)
  })
})
