import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import FooterLinks from '../FooterLinks'
import footerData from '../../../stubs/footerData'
import '@testing-library/jest-dom/extend-expect'

beforeEach(() => {
  jest.clearAllMocks()
})

it('should render the component', () => {
  const {
    contentfulFooter: {pages},
  } = footerData
  const {queryByTestId} = render(<FooterLinks pages={pages} />)
  footerData.contentfulFooter.pages.forEach(({name}) => {
    const footerLink = queryByTestId(`footer-link-${name}`)
    expect(footerLink).toBeDefined()
    expect(footerLink).toHaveAttribute('href', '/test')
  })
})
