import React from 'react'
import {waitForDomChange} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import render from '../../../utils/tests/renderWithHelmet'

import mockFooter from '../../../stubs/mockFooter'
import mockSEO from '../../../stubs/mockSEO'
import mockHeader from '../../../stubs/mockHeader'

import data from '../../../stubs/subArticleData'

import SubArticle from '..'

const pageContext = {
  subArticleSlug: 'sub article',
  sectionSlug: 'section',
  articleSlug: 'article',
  articleList: [
    {
      title: 'article Test',
      slug: 'article-1',
      sectionSlug: 'history',
      subArticleList: [
        {
          shortTitle: 'sub article title',
          slug: 'sub article slug',
        },
      ],
    },
  ],
}

it('should render the component', async () => {
  mockSEO()
  mockHeader()
  mockFooter()
  const {getAllByText} = render(
    <SubArticle pageContext={pageContext} data={data} />,
  )
  await waitForDomChange()
  expect(document.title).toEqual(data.contentfulSubArticle.title)
  // Should appear in the banner, mobile breadcrumbs and desktop breadcrumbs
  expect(getAllByText(data.contentfulSubArticle.article.title).length).toBe(3)
})
