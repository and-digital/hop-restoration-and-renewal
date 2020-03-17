import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'

import ArticleCard from '..'

const testBody = {
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
}

const slug = 'path'
const sectionSlug = 'section'
const title = 'title'
const linkText = 'here is a link'
const description =
  'First images of temporary House of Commons Chamber revealed. Plans will include a new temporary House of Commons Chamber, as well as work-space for all 650 MPs and their staff within a single secure site.'

it('should show a description and a link with text', () => {
  const {getByText} = render(
    <ArticleCard
      title={title}
      previewText={testBody}
      slug={slug}
      sectionSlug={sectionSlug}
      linkText={linkText}
    />,
  )
  const link = getByText(linkText)
  const cardBody = getByText(description)
  const titleText = getByText(title)

  expect(link).toBeDefined()
  expect(cardBody).toBeDefined()
  expect(titleText).toBeDefined()
  expect(link.parentNode).toHaveAttribute('href', '/section/path')
})
