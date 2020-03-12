import React from 'react'
import {waitForDomChange} from '@testing-library/react'

import render from '../../../utils/tests/renderWithTheme'
import mockFooter from '../../../stubs/mockFooter'
import mockHeader from '../../../stubs/mockHeader'

import Page from '..'

const data = {
  contentfulPage: {
    title: 'article',
  },
}

it('should render the component', async () => {
  mockHeader()
  mockFooter()
  const {getByText} = render(<Page data={data} />)
  await waitForDomChange()
  expect(document.title).toEqual(data.contentfulPage.title)
  expect(getByText(document.title)).toBeDefined()
})
