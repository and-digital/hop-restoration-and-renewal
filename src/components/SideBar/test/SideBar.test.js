import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import {fireEvent, waitForElement} from '@testing-library/react'
import mockIsMobile from '../../../stubs/mockIsMobile'
import '@testing-library/jest-dom/extend-expect'

import SideBar from '..'

beforeEach(() => {
  jest.clearAllMocks()
})

const title = 'title'
const articleList = [
  {
    slug: 'slug',
    title,
  },
]

it('should render the correct article names', () => {
  const {getByText} = render(<SideBar articleList={articleList} />)
  const articleName = getByText(title)
  expect(articleName).toBeDefined()
})

it('should render the mobile menu properly and open and close it', async () => {
  mockIsMobile()
  const {getByTestId} = render(<SideBar articleList={articleList} />)
  const menuHeader = getByTestId('sidebarMobileMenu')
  expect(menuHeader).toBeDefined()
  fireEvent.click(menuHeader)
  const closeMenu = await waitForElement(() => getByTestId('closeMenuIcon'))
  expect(closeMenu).toBeDefined()
  fireEvent.click(menuHeader)
  const openMenu = await waitForElement(() => getByTestId('openMenuIcon'))
  expect(openMenu).toBeDefined()
})
