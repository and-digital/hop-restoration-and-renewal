import React from 'react'
import {render, waitForDomChange} from '@testing-library/react'
import data from '../../../stubs/headerData'
import {useStaticQuery} from 'gatsby'

import Layout from '../'

const title = 'page title'

it('should add a title to the browser page and correct html attributes', async () => {
  useStaticQuery.mockImplementation(() => data)
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
