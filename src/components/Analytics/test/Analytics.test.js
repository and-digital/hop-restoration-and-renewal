import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import TagManager from 'react-gtm-module'

import Analytics from '..'

it('should render the component', () => {
  render(<Analytics />)
  expect(TagManager.initialize).toHaveBeenCalledTimes(1)
})
