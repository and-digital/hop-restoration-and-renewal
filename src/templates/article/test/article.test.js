import React from 'react'
import Article from '../'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const data = {
  contentfulArticle: {
    name: 'History',
  },
}

test('test', () => {
  const {getByText} = render(<Article data={data} />)
  expect(getByText(data.contentfulArticle.name)).toBeDefined()
})
