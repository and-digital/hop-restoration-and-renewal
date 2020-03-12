import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'
import RichText from '..'

it('should render the component', () => {
  const props = {
    className: 'footer__content',
    text: {
      json: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '© Houses of Parliament | Restoration and Renewal 2020',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {
              uri: 'http://google.com',
            },
            content: [
              {
                data: {},
                marks: [],
                value: 'Here is an external link',
                nodeType: 'text',
              },
            ],
            nodeType: 'hyperlink',
          },
        ],
      },
    },
  }

  const {getByText} = render(<RichText {...props} />)
  expect(getByText(/Houses of Parliament/g)).toBeDefined()
  expect(getByText('Here is an external link')).toBeDefined()
})
