import React from 'react'
import Article from '..'
import {render, waitForDomChange} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import mockHeader from '../../../stubs/mockHeader'

const data = {
  contentfulArticle: {
    name: 'History',
  },
}

test('should render title and component', async () => {
  mockHeader()
  const {getByText} = render(<Article data={data} />)
  await waitForDomChange()
  expect(document.title).toEqual(data.contentfulArticle.name)
  expect(getByText(data.contentfulArticle.name)).toBeDefined()
})
