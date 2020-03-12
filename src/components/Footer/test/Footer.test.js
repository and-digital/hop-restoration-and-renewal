import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import render from '../../../utils/tests/renderWithTheme'
import Footer from '..'
import footerData from '../../../stubs/footerData'
import mockFooter from '../../../stubs/mockFooter'

beforeEach(() => {
  jest.clearAllMocks()
})

it('should render the component', () => {
  mockFooter()
  const {queryByTestId} = render(<Footer />)
  footerData.contentfulFooter.pages.forEach(({name}) => {
    const footerLink = queryByTestId(`footer-link-${name}`)
    expect(footerLink).toBeDefined()
    expect(footerLink).toHaveAttribute('href', '/test')
  })
})
