import React from 'react'
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from '..'
import data from '../../../stubs/headerData'
import mockHeader from '../../../stubs/mockHeader'
import mockIsMobile from '../../../stubs/mockIsMobile'

it('should render the component', () => {
  mockHeader()
  const {getByText, getByAltText} = render(<Header />)
  data.contentfulHeader.sections.forEach(({name}) => {
    const section = getByText(name)
    expect(section).toBeDefined()
    expect(section).toHaveAttribute('href', '/palace')
  })
  const logo = getByAltText(data.contentfulHeader.logo.title)
  expect(logo).toBeDefined()
})

it('should show the hamburgher menu, open and close it', async () => {
  mockHeader()
  mockIsMobile()
  const {queryByText, queryByTestId} = render(<Header />)
  const mobileMenu = queryByTestId('mobileMenu')
  expect(mobileMenu).toBeDefined()
  data.contentfulHeader.sections.forEach(({name}) => {
    expect(queryByText(name)).toBeNull()
  })
  fireEvent.click(mobileMenu)
  data.contentfulHeader.sections.forEach(({name}) => {
    expect(queryByText(name)).toBeDefined()
  })
  const closeMenu = queryByTestId('closeMenu')
  expect(closeMenu).toBeDefined()
  fireEvent.click(closeMenu)
  await waitForElementToBeRemoved(() => queryByTestId('drawer'))
  expect(queryByTestId('closeMenu')).toBeNull()
  data.contentfulHeader.sections.forEach(({name}) => {
    expect(queryByText(name)).toBeNull()
  })
})
