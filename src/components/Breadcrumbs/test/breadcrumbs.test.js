import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import {queryByText} from '@testing-library/react'
import Breadcrumbs from '../breadcrumbs'
import '@testing-library/jest-dom/extend-expect'

const breadcrumbs = [
  {title: 'About us', slug: '/about-us'},
  {title: 'More about us', slug: '/about-us/more'},
]

describe('Breadcrumbs', () => {
  test('Should list just the last breadcrumb on mobile', () => {
    const {getByTestId} = render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
    const element = getByTestId('mobile-breadcrumbs')
    expect(queryByText(element, breadcrumbs[0].title)).not.toBeInTheDocument()
    expect(queryByText(element, breadcrumbs[1].title)).toBeInTheDocument()
  })

  test('Should list all breadcrumbs on desktop', () => {
    const {getByTestId} = render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
    const element = getByTestId('desktop-breadcrumbs')
    expect(queryByText(element, breadcrumbs[0].title)).toBeInTheDocument()
    expect(queryByText(element, breadcrumbs[1].title)).toBeInTheDocument()
  })
})
