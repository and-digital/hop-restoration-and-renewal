import React from 'react'
import render from '../../../utils/tests/renderWithTheme'

import Quote from '..'

const quoteText = 'This is my test quote'
const quoteAuthor = 'Batman'

const props = {
  quoteText,
  quoteAuthor,
}

it('should render the component with the correct quote and author name', () => {
  const {getByText} = render(<Quote {...props} />)
  expect(getByText(quoteText)).toBeDefined()
  expect(getByText(quoteAuthor)).toBeDefined()
})
