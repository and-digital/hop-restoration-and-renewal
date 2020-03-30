import React from 'react'
import {waitForDomChange} from '@testing-library/react'

import render from '../../../utils/tests/renderWithHelmet'
import mockFooter from '../../../stubs/mockFooter'
import mockHeader from '../../../stubs/mockHeader'
import mockSEO from '../../../stubs/mockSEO'
import pageData from '../../../stubs/pageData'
import Page from '..'

it('should render the component', async () => {
  mockSEO()
  mockHeader()
  mockFooter()
  const {getByText} = render(<Page data={pageData} />)
  await waitForDomChange()
  expect(getByText(/Sorry, we could not find that page/g)).toBeDefined()
})
