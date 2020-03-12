import React from 'react'
import {fireEvent, waitForElementToBeRemoved} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import render from '../../../utils/tests/renderWithTheme'

import Header from '..'
import data from '../../../stubs/headerData'
import mockHeader from '../../../stubs/mockHeader'
import mockIsMobile from '../../../stubs/mockIsMobile'

it('should render the component', () => {
  mockHeader()
  const {getByAltText, queryByText} = render(<Header />)
  data.contentfulHeader.sections.forEach(({name}) => {
    const section = queryByText(name)
    expect(section).toBeDefined()
    expect(section.parentNode).toHaveAttribute('href', '/palace')
  })
  const logo = getByAltText(data.contentfulHeader.logo.title)
  expect(logo).toBeDefined()
})

it('should show the hamburger menu, open and close it', async () => {
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
