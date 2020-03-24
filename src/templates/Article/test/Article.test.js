import React from 'react'
import Article from '..'
import {waitForDomChange} from '@testing-library/react'
import render from '../../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'
import mockFooter from '../../../stubs/mockFooter'
import mockSEO from '../../../stubs/mockSEO'
import mockHeader from '../../../stubs/mockHeader'
import data from '../../../stubs/articleData'

const pageContext = {
  articleList: [
    {
      title: 'article 1',
      slug: '/history/article-1',
    },
  ],
}

test('should render title amd sidebar menu containing a list of articles', async () => {
  mockSEO()
  mockHeader()
  mockFooter()
  const {getByText, queryByTestId} = render(
    <Article data={data} pageContext={pageContext} />,
  )
  await waitForDomChange()
  expect(document.title).toEqual(data.contentfulArticle.title)
  expect(getByText(data.contentfulArticle.section.title)).toBeDefined()
  pageContext.articleList.forEach(({title, slug}) => {
    const articleLink = getByText(title)
    const articleSlug = queryByTestId(`sideBar-link-${title}`)

    expect(articleLink).toBeDefined()
    expect(articleSlug).toHaveAttribute('href', `/${slug}`)
  })
})
