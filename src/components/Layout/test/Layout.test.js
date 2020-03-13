import React from 'react'
import {waitForDomChange} from '@testing-library/react'
import render from '../../../utils/tests/renderWithTheme'

import Layout from '../'
import mockHeader from '../../../stubs/mockHeader'
import mockFooter from '../../../stubs/mockFooter'

const title = 'page title'

beforeEach(() => {
  jest.clearAllMocks()
})

it('should add a title to the browser page and correct html attributes', async () => {
  mockHeader()
  mockFooter()
  const text = 'child component'
  const {getByText} = render(
    <Layout title={title}>
      <div>{text}</div>
    </Layout>,
  )
  await waitForDomChange()
  expect(getByText(text)).toBeDefined()
  expect(document.title).toEqual(title)
  expect(document.getElementsByTagName('html')[0].getAttribute('lang')).toEqual(
    'en',
  )
})
