import React from 'react'
import Article from '..'
import {render, waitForDomChange} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import mockData from '../../../stubs/mockData'
import headerData from '../../../stubs/headerData'

const data = {
  contentfulArticle: {
    name: 'History',
  },
}

test('should render title and component', async () => {
  mockData(headerData)
  const {getByText} = render(<Article data={data} />)
  await waitForDomChange()
  expect(document.title).toEqual(data.contentfulArticle.name)
  expect(getByText(data.contentfulArticle.name)).toBeDefined()
})
