import React from 'react'
import render from '../../../utils/tests/renderWithTheme'

import Hero from '..'

const image = {
  title: 'Hero image title',
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

it('should display a fluid image', () => {
  const {getByAltText} = render(<Hero image={image} />)
  expect(getByAltText(image.title)).toBeDefined()
})
