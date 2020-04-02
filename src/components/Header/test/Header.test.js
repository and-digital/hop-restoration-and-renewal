import React from 'react'
import {fireEvent, waitForDomChange} from '@testing-library/react'
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
  const {getAllByAltText, getByText} = render(
    <LocationProvider>
      <Header />
    </LocationProvider>,
  )
  headerData.contentfulHeader.sections.forEach(({name, slug}) => {
    const section = getByText(name)
    expect(section).toBeDefined()
    expect(section.parentNode).toHaveAttribute('href', `/${slug}`)
  })
  const logo = getAllByAltText(headerData.contentfulHeader.logo.title)
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
    const sectionStyles = window.getComputedStyle(section.parentNode)
    if (slug === 'palace') {
      expect(sectionStyles['border-bottom']).toEqual('5px solid #FF671D')
    } else {
      expect(sectionStyles['border-bottom']).toEqual('')
    }
  })
})

test('should show the hamburger menu, open and close it', async () => {
  mockHeader()
  mockIsMobile()
  const {getByText, getAllByText, queryByTestId} = render(
    <LocationProvider>
      <Header />
    </LocationProvider>,
  )
  const mobileMenu = queryByTestId('mobileMenu')
  expect(mobileMenu).toBeDefined()
  headerData.contentfulHeader.sections.forEach(({name}) => {
    expect(getByText(name)).toBeDefined()
  })
  fireEvent.click(mobileMenu)
  headerData.contentfulHeader.sections.forEach(({name}) => {
    expect(getAllByText(name).length).toEqual(2)
  })
  const closeMenu = queryByTestId('closeMenu')
  expect(closeMenu).toBeDefined()
  fireEvent.click(closeMenu)
  await waitForDomChange(() => queryByTestId('drawer'))
  expect(queryByTestId('closeMenu')).toBeNull()
  headerData.contentfulHeader.sections.forEach(({name}) => {
    expect(getByText(name)).toBeDefined()
  })
})
