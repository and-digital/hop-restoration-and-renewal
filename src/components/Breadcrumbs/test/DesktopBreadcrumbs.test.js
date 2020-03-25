import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import DesktopBreadcrumbs from '../DesktopBreadcrumbs'
import '@testing-library/jest-dom/extend-expect'

const breadcrumbs = [
  {title: 'About us', slug: '/about-us'},
  {title: 'More about us', slug: '/about-us/more'},
]

test('Should list all breadcrumbs on desktop', () => {
  const {queryByText} = render(<DesktopBreadcrumbs breadcrumbs={breadcrumbs} />)
  expect(queryByText(breadcrumbs[0].title)).toBeInTheDocument()
  expect(queryByText(breadcrumbs[1].title)).toBeInTheDocument()
})
