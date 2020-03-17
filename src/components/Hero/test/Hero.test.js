import React from 'react'
import render from '../../../utils/tests/renderWithTheme'

import Hero from '..'

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
              'The Palace of' +
              ' Westminster is the political, historic and symbolic heart of our democracy and our nation. Today, they' +
              ' are in a state of serious disrepair. Practically, symbolically and economically their restoration and renewal is urgent and vital.',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
    ],
    nodeType: 'document',
  },
}

const props = {
  image,
  title,
  text,
}
it('should display a fixed image', () => {
  const {getByAltText} = render(<Hero {...props} />)
  expect(getByAltText(image.title)).toBeDefined()
})
