import React from 'react'
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from '..'
import headerData from '../../../stubs/headerData'
import mockData from '../../../stubs/mockData'
import mockIsMobile from '../../../stubs/mockIsMobile'

it('should render the component', () => {
  mockData(headerData)
  const {getByAltText, queryByText} = render(<Header />)
  headerData.contentfulHeader.sections.forEach(({name}) => {
    const section = queryByText(name)
    expect(section).toBeDefined()
    expect(section.parentNode).toHaveAttribute('href', '/palace')
  })
  const logo = getByAltText(headerData.contentfulHeader.logo.title)
  expect(logo).toBeDefined()
})

it('should show the hamburger menu, open and close it', async () => {
  mockData(headerData)
  mockIsMobile()
  const {queryByText, queryByTestId} = render(<Header />)
  const mobileMenu = queryByTestId('mobileMenu')
  expect(mobileMenu).toBeDefined()
  headerData.contentfulHeader.sections.forEach(({name}) => {
    expect(queryByText(name)).toBeNull()
  })
  fireEvent.click(mobileMenu)
  headerData.contentfulHeader.sections.forEach(({name}) => {
    expect(queryByText(name)).toBeDefined()
  })
  // headerData.contentfulFooter.pages.forEach(({name}) => {
  //   const footerLink = queryByTestId(`footer-link-${name}`)
  //   expect(footerLink).toBeDefined()
  //   expect(footerLink).toHaveAttribute('href', '/test')
  // })
  const closeMenu = queryByTestId('closeMenu')
  expect(closeMenu).toBeDefined()
  fireEvent.click(closeMenu)
  await waitForElementToBeRemoved(() => queryByTestId('drawer'))
  expect(queryByTestId('closeMenu')).toBeNull()
  headerData.contentfulHeader.sections.forEach(({name}) => {
    expect(queryByText(name)).toBeNull()
  })
})
