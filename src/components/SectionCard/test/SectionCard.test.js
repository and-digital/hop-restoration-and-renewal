import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'

import SectionCard from '..'

const image = {
  title: 'palace image',
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
}

const slug = 'path'
const linkText = 'here is a link'

it('should show an image and a link with text', () => {
  const {getByText} = render(
    <SectionCard slug={slug} image={image} linkText={linkText} />,
  )
  const link = getByText(linkText)
  expect(link).toBeDefined()
  expect(link.parentNode).toHaveAttribute('href', '/path')
})
