import React from 'react'
import render from '../../../utils/tests/renderWithTheme'

import Person from '..'

const data = {
  avatar: {
    fields: {
      title: {avatarTitle: 'altText'},
      file: {['en-US']: {url: 'imageUrl'}},
    },
  },
  title: 'title',
  description: 'test',
}

it('should render the component with the correct title and description', () => {
  const {getByText} = render(<Person {...data} />)
  expect(getByText(data.description)).toBeDefined()
  expect(getByText(data.title)).toBeDefined()
})

it('should render the component with image and alt text', () => {
  const {getByAltText} = render(<Person {...data} />)
  expect(getByAltText(data.avatar.fields.title.avatarTitle)).toBeDefined()
})
