import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'

import ArticleCard from '..'

const slug = 'path'
const sectionSlug = 'section'
const linkText = 'here is a link'

it('should show an image and a link with text', () => {
  const {getByText} = render(
    <ArticleCard slug={slug} sectionSlug={sectionSlug} linkText={linkText} />,
  )
  const link = getByText(linkText)
  expect(link).toBeDefined()
  expect(link.parentNode).toHaveAttribute('href', '/section/path')
})
