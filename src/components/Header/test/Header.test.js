import React from 'react'
import {fireEvent, waitForElementToBeRemoved} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import render from '../../../utils/tests/renderWithTheme'

import Header from '..'
import mockIsMobile from '../../../stubs/mockIsMobile'
import mockHeader from '../../../stubs/mockHeader'
import headerData from '../../../stubs/headerData'
import LocationProvider from '../../../providers/LocationProvider'

beforeEach(() => {
  jest.clearAllMocks()
})

test('should render the component', () => {
  mockHeader()
  const {getByAltText, getByText} = render(
    <LocationProvider>
      <Header />
    </LocationProvider>,
  )
  headerData.contentfulHeader.sections.forEach(({name, slug}) => {
    const section = getByText(name)
    expect(section).toBeDefined()
    expect(section.parentNode).toHaveAttribute('href', `/${slug}`)
  })
  const logo = getByAltText(headerData.contentfulHeader.logo.title)
  expect(logo).toBeDefined()
})

test('should highlight the current section', () => {
  mockHeader()
  const {getByText} = render(
    <LocationProvider section="palace">
      <Header />
    </LocationProvider>,
  )
  headerData.contentfulHeader.sections.forEach(({name, slug}) => {
    const section = getByText(name)
    expect(section).toBeDefined()
    expect(section.parentNode).toHaveAttribute('href', `/${slug}`)
    const sectionStyles = window.getComputedStyle(section)
    if (slug === 'palace') {
      expect(sectionStyles['border-bottom']).toEqual('5px solid')
    } else {
      expect(sectionStyles['border-bottom']).toEqual('')
    }
  })
})

test('should show the hamburger menu, open and close it', async () => {
  mockHeader()
  mockIsMobile()
  const {queryByText, queryByTestId} = render(
    <LocationProvider>
      <Header />
    </LocationProvider>,
  )
  const mobileMenu = queryByTestId('mobileMenu')
  expect(mobileMenu).toBeDefined()
  headerData.contentfulHeader.sections.forEach(({name}) => {
    expect(queryByText(name)).toBeNull()
  })
  fireEvent.click(mobileMenu)
  headerData.contentfulHeader.sections.forEach(({name}) => {
    expect(queryByText(name)).toBeDefined()
  })
  const closeMenu = queryByTestId('closeMenu')
  expect(closeMenu).toBeDefined()
  fireEvent.click(closeMenu)
  await waitForElementToBeRemoved(() => queryByTestId('drawer'))
  expect(queryByTestId('closeMenu')).toBeNull()
  headerData.contentfulHeader.sections.forEach(({name}) => {
    expect(queryByText(name)).toBeNull()
  })
})
