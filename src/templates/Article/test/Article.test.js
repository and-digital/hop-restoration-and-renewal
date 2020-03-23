import React from 'react'
import Article from '..'
import {waitForDomChange} from '@testing-library/react'
import render from '../../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'
import mockFooter from '../../../stubs/mockFooter'
import mockSEO from '../../../stubs/mockSEO'
import mockHeader from '../../../stubs/mockHeader'

const data = {
  contentfulArticle: {
    name: 'History',
    template: {
      content: {
        json: {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    '© Houses of Parliament | Restoration and Renewal 2020',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
        },
      },
    },
  },
}

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
  const {getByText} = render(<Article data={data} pageContext={pageContext} />)
  await waitForDomChange()
  expect(document.title).toEqual(data.contentfulArticle.name)
  expect(getByText(data.contentfulArticle.name)).toBeDefined()
  pageContext.articleList.forEach(({title, slug}) => {
    const articleLink = getByText(title)
    expect(articleLink).toBeDefined()
    expect(articleLink).toHaveAttribute('href', `/${slug}`)
  })
})
