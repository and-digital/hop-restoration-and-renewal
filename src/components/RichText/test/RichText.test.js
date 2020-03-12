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
        ],
      },
    },
  }

  const {getByText} = render(<RichText {...props} />)
  const contentValue = getByText(/Houses of Parliament/g)
  expect(contentValue).toBeDefined()
})
