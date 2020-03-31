import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import {fireEvent, waitForElement} from '@testing-library/react'
import mockIsMobile from '../../../stubs/mockIsMobile'
import '@testing-library/jest-dom/extend-expect'

import SideBar from '..'
import LocationProvider from '../../../providers/LocationProvider'

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
  const {getAllByText} = render(
    <LocationProvider>
      <SideBar articleList={articleList} />
    </LocationProvider>,
  )

  articleList.forEach(({title, slug}) => {
    const articleLink = getAllByText(title)
    articleLink.forEach(node =>
      expect(node.parentNode).toHaveAttribute('href', `/${slug}`),
    )
    expect(articleLink).toHaveLength(2)
  })
})

it('should render the mobile menu properly and open and close it', async () => {
  mockIsMobile()
  const {getByTestId} = render(
    <LocationProvider>
      <SideBar articleList={articleList} />
    </LocationProvider>,
  )
  const menuHeader = getByTestId('sidebarMobileMenu')
  expect(menuHeader).toBeDefined()
  fireEvent.click(menuHeader)
  const closeMenu = await waitForElement(() => getByTestId('closeMenuIcon'))
  expect(closeMenu).toBeDefined()
  fireEvent.click(menuHeader)
  const openMenu = await waitForElement(() => getByTestId('openMenuIcon'))
  expect(openMenu).toBeDefined()
})

it('should highlight the current article page', () => {
  const currentArticle = {
    slug: 'current_article',
    title: 'current article',
  }

  const {getAllByText} = render(
    <LocationProvider article="current_article">
      <SideBar articleList={[...articleList, currentArticle]} />
    </LocationProvider>,
  )
  const articleElement = getAllByText(articleList[0].title)[1]
  const currentArticleElement = getAllByText(currentArticle.title)[1]
  const articleStyles = window.getComputedStyle(articleElement.parentNode)
  const currentArticleStyles = window.getComputedStyle(
    currentArticleElement.parentNode,
  )
  expect(articleStyles['border-left']).toEqual('')
  expect(currentArticleStyles['border-left']).toEqual('4px solid #6B609C')
})
