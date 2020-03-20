import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import ArticleBanner from '..'

const data = {
  contentfulArticle: {
    name: 'article title',
    section: {
      name: 'section title',
    },
  },
}

it('should display a title', () => {
  const {getAllByText} = render(<ArticleBanner data={data} />)
  expect(getAllByText(name)).toBeDefined()
})
