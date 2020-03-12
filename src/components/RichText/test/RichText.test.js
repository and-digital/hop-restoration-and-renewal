import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import RichText from '..'

it('should render the component', () => {
  const props = {
    className: 'footer__content',
    text: {
      json: {
        content: [
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value: 'lorem ipsum',
                marks: [],
              },
              {
                nodeType: 'hyperlink',
                data: {
                  uri: 'https://www.test.com',
                },
                content: [
                  {
                    value: 'test-url',
                  },
                ],
              },
            ],
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
