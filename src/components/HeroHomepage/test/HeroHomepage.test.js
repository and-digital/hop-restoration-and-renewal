import React from 'react'
import render from '../../../utils/tests/renderWithTheme'

import HeroHomepage from '..'

const image = {
  title: 'Hero image title',
  fixed: {
    height: 605,
    width: 605,
    src: '',
    srcSet: '',
    srcWebp: '',
    srcSetWebp: '',
  },
}
const title = 'Hero title'
const subtitle = 'Hero subtitle'

const props = {
  image,
  title,
  subtitle,
}
it('should display a fixed image', () => {
  const {getByAltText} = render(<HeroHomepage {...props} />)
  expect(getByAltText(image.title)).toBeDefined()
})

it('should display the correct title', () => {
  const {getByText} = render(<HeroHomepage {...props} />)
  expect(getByText(title)).toBeDefined()
})

it('should display the correct subtitle', () => {
  const {getByText} = render(<HeroHomepage {...props} />)
  expect(getByText(subtitle)).toBeDefined()
})
