import React from 'react'
import Section from '..'
import {waitForDomChange} from '@testing-library/react'
import render from '../../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'
import mockHeader from '../../../stubs/mockHeader'
import mockFooter from '../../../stubs/mockFooter'
import mockSEO from '../../../stubs/mockSEO'

const heroImageTitle = 'Hero image title'
const heroImageText = {
  json: {
    data: {},
    content: [
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: 'Restoration and Renewal',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
    ],
  },
}

const heroData = {
  image: {
    title: heroImageTitle,
    fixed: {
      height: 605,
      width: 605,
      src: '',
      srcSet: '',
      srcWebp: '',
      srcSetWebp: '',
    },
  },
  title: heroImageTitle,
  text: heroImageText,
}

const data = {
  contentfulSection: {
    title: 'Westminster',
    slug: 'palace',
    hero: heroData,
    articles: [
      {
        previewLinkText: 'history',
        slug: 'history',
        title: 'History',
        previewText: {
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
                      'First images of temporary House of Commons Chamber revealed. Plans will include a new temporary House of Commons Chamber, as well as work-space for all 650 MPs and their staff within a single secure site.',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'document',
          },
        },
      },
    ],
  },
}

beforeEach(() => {
  jest.clearAllMocks()
})

test('show page title and component', async () => {
  mockSEO()
  mockHeader()
  mockFooter()
  render(<Section data={data} />)
  await waitForDomChange()
  expect(document.title).toEqual(data.contentfulSection.title)
})

test('should show all the articles', () => {
  mockSEO()
  mockHeader()
  mockFooter()
  const {getByText} = render(<Section data={data} />)
  data.contentfulSection.articles.forEach(({previewLinkText, slug}) => {
    const articleLink = getByText(previewLinkText)
    expect(articleLink).toBeDefined()
    expect(articleLink.parentNode).toHaveAttribute(
      'href',
      `/${data.contentfulSection.slug}/${slug}`,
    )
  })
})
