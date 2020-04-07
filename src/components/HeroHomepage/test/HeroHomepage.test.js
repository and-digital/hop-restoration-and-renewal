import React from 'react'
import render from '../../../utils/tests/renderWithTheme'

import HeroHomepage from '..'

const image = {
  title: 'Hero image title',
  fluid: {
    base64: '',
    aspectRatio: 100,
    src: '',
    srcSet: '',
    srcWebp: '',
    srcSetWebp: '',
    sizes: '',
  },
}
const title = 'Hero title'
const subtitle = 'Hero subtitle'
const text = {
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
              'Description of the Houses of Parliament Restoration and Renewal program',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
    ],
    nodeType: 'document',
  },
}
const quote = {
  quoteAuthor: 'Ada Lovelace',
  quoteDescription: {quoteDescription: 'Quote of the year'},
}

const props = {
  image,
  title,
  subtitle,
  text,
  quote,
}
it('should display a fluid image', () => {
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

it('should display the correct quote', () => {
  const {getByText} = render(<HeroHomepage {...props} />)
  expect(getByText(quote.quoteDescription.quoteDescription)).toBeDefined()
})

it('should display the correct quote author', () => {
  const {getByText} = render(<HeroHomepage {...props} />)
  expect(getByText(quote.quoteAuthor)).toBeDefined()
})
