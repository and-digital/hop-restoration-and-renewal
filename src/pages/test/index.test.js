import React from 'react'
import IndexPage from '../index'
import {render} from '@testing-library/react'

test('test', () => {
  const {getByText} = render(<IndexPage />)
  expect(getByText('Restoration and Renewal')).toBeDefined()
})
