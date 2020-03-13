import React from 'react'
import {waitForDomChange} from '@testing-library/react'
import render from '../../../utils/tests/renderWithTheme'
import seoData from '../../../stubs/seoData'
import mockSEO from '../../../stubs/mockSEO'

import SEO from '../'

const title = 'page title'
const description = 'page description'

beforeEach(() => {
  jest.clearAllMocks()
})

it('should add a title to the browser page and correct meta tags', async () => {
  mockSEO()
  render(<SEO title={title} description={description} />)
  await waitForDomChange()
  const metaDescription = document.querySelector('meta[name="description"]')
    .content
  const metaTags = document.querySelector('meta[name="keywords"]').content
  expect(document.title).toEqual(title)
  expect(metaDescription).toEqual(description)
  expect(metaTags).toEqual(seoData.contentfulSiteMetaData.tags.join(', '))
})

it('should display the default meta data', async () => {
  mockSEO()
  render(<SEO />)
  await waitForDomChange()
  expect(document.title).toEqual(seoData.contentfulSiteMetaData.title)
  const metaDescription = document.querySelector('meta[name="description"]')
    .content
  expect(metaDescription).toEqual(seoData.contentfulSiteMetaData.description)
})
