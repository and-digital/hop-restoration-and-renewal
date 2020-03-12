import React from 'react'
import Article from '..'
import {waitForDomChange} from '@testing-library/react'
import render from '../../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'
import mockData from '../../../stubs/mockData'
import headerData from '../../../stubs/headerData'
import mockFooter from '../../../stubs/mockFooter'

const data = {
  contentfulArticle: {
    name: 'History',
  },
}

test('should render title and component', async () => {
  mockData(headerData)
  mockFooter()
  const {getByText} = render(<Article data={data} />)
  await waitForDomChange()
  expect(document.title).toEqual(data.contentfulArticle.name)
  expect(getByText(data.contentfulArticle.name)).toBeDefined()
})
