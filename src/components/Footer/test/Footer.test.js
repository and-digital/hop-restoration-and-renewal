import React from 'react'
import {render} from '@testing-library/react'
import Footer from '..'
import footerData from '../../../stubs/footerData'
import mockData from '../../../stubs/mockData'

it('should render the component', () => {
  mockData(footerData)
  const {queryByTestId} = render(<Footer type="header" />)
  footerData.contentfulFooter.pages.forEach(({name}) => {
    const footerLink = queryByTestId(`footer-link-${name}`)
    expect(footerLink).toBeDefined()
    expect(footerLink).toHaveAttribute('href', '/test')
  })
})
