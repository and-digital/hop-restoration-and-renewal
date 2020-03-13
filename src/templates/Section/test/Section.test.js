import React from 'react'
import Section from '..'
import {waitForDomChange} from '@testing-library/react'
import render from '../../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'
import mockHeader from '../../../stubs/mockHeader'
import mockFooter from '../../../stubs/mockFooter'
import mockSEO from '../../../stubs/mockSEO'

const heroImageTitle = 'Hero image title'

const data = {
  contentfulSection: {
    title: 'Westminster',
    slug: 'palace',
    hero: {
      image: {
        title: heroImageTitle,
        fluid: {
          base64: '',
          aspectRatio: 1000,
          height: 400,
          src: '',
          srcSet: '',
          srcSetWebp: '',
          srcWebp: '',
          sizes: '',
        },
      },
    },
    articles: [
      {
        previewLinkText: 'history',
        slug: 'history',
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
  const {getByText} = render(<Section data={data} />)
  await waitForDomChange()
  expect(document.title).toEqual(data.contentfulSection.title)
  expect(getByText(data.contentfulSection.title)).toBeDefined()
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
