import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import MobileBreadcrumbs from '../MobileBreadcrumbs'
import '@testing-library/jest-dom/extend-expect'

const copyText = {
  backText: '‹ Back to ',
}

const breadcrumbs = [
  {title: 'About us', slug: '/about-us'},
  {title: 'More about us', slug: '/about-us/more'},
]

test('Should list just the last breadcrumb on mobile', () => {
  const {queryByText} = render(
    <MobileBreadcrumbs breadcrumbs={breadcrumbs} {...copyText} />,
  )
  expect(queryByText(breadcrumbs[0].title)).not.toBeInTheDocument()
  expect(queryByText(breadcrumbs[1].title)).toBeInTheDocument()
})

test('Should return home if the breadcrumbs array is empty', () => {
  const {queryByText} = render(
    <MobileBreadcrumbs breadcrumbs={[]} {...copyText} />,
  )
  expect(queryByText('Home')).toBeInTheDocument()
})
