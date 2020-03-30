import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import ArticleBanner from '..'

const section = {
  title: 'section title',
}

it('should display a title', () => {
  const {getAllByText} = render(<ArticleBanner {...section} />)
  expect(getAllByText(name)).toBeDefined()
})
