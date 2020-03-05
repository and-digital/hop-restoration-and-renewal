import React from 'react'
import {render} from '@testing-library/react'
import {useStaticQuery} from 'gatsby'
import '@testing-library/jest-dom/extend-expect'

import Header from '..'
import data from '../../../stubs/headerData'

it('should render the component', () => {
  useStaticQuery.mockImplementation(() => data)
  const {getByText, getByAltText} = render(<Header />)
  data.contentfulHeader.sections.forEach(({name}) => {
    const section = getByText(name)
    expect(section).toBeDefined()
    expect(section).toHaveAttribute('href', '/palace')
  })
  const logo = getByAltText(data.contentfulHeader.logo.title)
  expect(logo).toBeDefined()
})
