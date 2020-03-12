import React from 'react'
import {render} from '@testing-library/react'
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

  const {getByText, getByTestId} = render(<RichText {...props} />)
  const contentValue = getByText('lorem ipsum')
  expect(contentValue).toBeDefined()
  const link = getByTestId('hyperlink-richtext')
  expect(link).toBeDefined()
})
