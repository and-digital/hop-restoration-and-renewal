import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'
import ImageWrapper from '../ImageWrapper'

const props = {
  title: 'testTitle',
  url: 'testUrl',
}

it('ImageWrapper renders correctly', () => {
  const {getByText, getByAltText} = render(<ImageWrapper {...props} />)
  expect(getByText('testTitle')).toBeDefined()
  const image = getByAltText('testTitle')
  expect(image).toBeDefined()
  expect(image).toHaveAttribute('src', 'testUrl')
})
