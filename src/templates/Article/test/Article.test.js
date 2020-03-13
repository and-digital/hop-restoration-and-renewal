import React from 'react'
import Article from '..'
import {waitForDomChange} from '@testing-library/react'
import render from '../../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'
import mockFooter from '../../../stubs/mockFooter'
import mockSEO from '../../../stubs/mockSEO'
import mockHeader from '../../../stubs/mockHeader'

const data = {
  contentfulArticle: {
    name: 'History',
  },
}

test('should render title and component', async () => {
  mockSEO()
  mockHeader()
  mockFooter()
  const {getByText} = render(<Article data={data} />)
  await waitForDomChange()
  expect(document.title).toEqual(data.contentfulArticle.name)
  expect(getByText(data.contentfulArticle.name)).toBeDefined()
})
