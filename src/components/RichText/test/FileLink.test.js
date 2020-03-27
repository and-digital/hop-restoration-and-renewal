import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'
import FileLink from '../FileLink'

const props = {
  title: 'testTitle',
  file: {
    fields: {
      file: {
        'en-US': {
          url: 'testUrl',
          contentType: 'test/pdf',
          details: {
            size: 13624,
          },
        },
      },
    },
  },
}

it('filelink renders correctly', () => {
  const {getByText} = render(<FileLink {...props} />)
  const title = getByText('testTitle')
  expect(title).toBeDefined()
  expect(title.parentNode).toHaveAttribute('href', 'testUrl')
  expect(getByText('PDF', {exact: false})).toBeDefined()
  expect(getByText('13 KB', {exact: false})).toBeDefined()
})
