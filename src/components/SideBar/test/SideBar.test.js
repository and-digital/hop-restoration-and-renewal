import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'

import SideBar from '..'

const title = 'title'
const articleList = [
  {
    slug: 'slug',
    title,
  },
]

it('should render the correct article names', () => {
  const {getByText} = render(<SideBar articleList={articleList} />)
  const articleName = getByText(title)
  expect(articleName).toBeDefined()
})
