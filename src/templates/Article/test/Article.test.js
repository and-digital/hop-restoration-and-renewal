import React from 'react'
import Article from '..'
import {waitForDomChange} from '@testing-library/react'
import render from '../../../utils/tests/renderWithHelmet'
import '@testing-library/jest-dom/extend-expect'
import mockFooter from '../../../stubs/mockFooter'
import mockSEO from '../../../stubs/mockSEO'
import mockHeader from '../../../stubs/mockHeader'
import data from '../../../stubs/articleData'

const pageContext = {
  articleList: [
    {
      title: 'articleList Test',
      slug: '/history/article-1',
    },
  ],
  parentSection: {
    title: 'History Section',
    slug: '/history/article-1',
  },
}

test('should render title amd sidebar menu containing a list of articles', async () => {
  mockSEO()
  mockHeader()
  mockFooter()
  const {getAllByText} = render(
    <Article data={data} pageContext={pageContext} />,
  )
  await waitForDomChange()
  expect(document.title).toEqual(data.contentfulArticle.title)
  // Should appear in the banner, mobile breadcrumbs and desktop breadcrumbs
  expect(getAllByText(pageContext.parentSection.title).length).toBe(3)
  pageContext.articleList.forEach(({title, slug}) => {
    const articleLink = getAllByText(title)
    articleLink.forEach(node =>
      expect(node.parentNode).toHaveAttribute('href', slug),
    )
    expect(articleLink).toHaveLength(2)
  })
})
