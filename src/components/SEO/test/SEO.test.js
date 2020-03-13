import React from 'react'
import {waitForDomChange} from '@testing-library/react'
import render from '../../../utils/tests/renderWithTheme'

import SEO from '../'

const title = 'page title'

beforeEach(() => {
  jest.clearAllMocks()
})

it('should add a title to the browser page and correct html attributes', async () => {
  render(<SEO title={title} />)
  await waitForDomChange()
  expect(document.title).toEqual(title)
})
