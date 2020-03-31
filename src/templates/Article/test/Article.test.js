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
      title: 'article Test',
      slug: 'article-1',
      sectionSlug: 'history',
    },
  ],
  slug: 'article',
  sectionSlug: 'section',
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
  // Should appear in the title, mobile breadcrumbs and desktop breadcrumbs
  expect(getAllByText(data.contentfulArticle.section.title).length).toBe(3)
  pageContext.articleList.forEach(({title, sectionSlug, slug}) => {
    const articleLink = getAllByText(title)
    articleLink.forEach(node =>
      expect(node.parentNode).toHaveAttribute(
        'href',
        `/${sectionSlug}/${slug}`,
      ),
    )
    expect(articleLink).toHaveLength(2)
  })
})
