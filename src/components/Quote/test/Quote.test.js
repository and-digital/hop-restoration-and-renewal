import React from 'react'
import render from '../../../utils/tests/renderWithTheme'

import Quote from '..'

const quoteDescription = 'This is my test quote'
const quoteAuthor = 'Batman'

const props = {
  quoteDescription,
  quoteAuthor,
}

it('should render the component with the correct quote and author name', () => {
  const {getByText} = render(<Quote {...props} />)
  expect(getByText(quoteDescription)).toBeDefined()
  expect(getByText(quoteAuthor)).toBeDefined()
})
