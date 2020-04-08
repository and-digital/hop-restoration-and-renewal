import React from 'react'
import render from '../../../utils/tests/renderWithTheme'

import PageIntro from '..'

const title = 'title test'
const text = {
  json: {
    data: {},
    content: [
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              'First images of temporary House of Commons Chamber revealed. Plans will include a new temporary House of Commons Chamber, as well as work-space for all 650 MPs and their staff within a single secure site.',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
    ],
    nodeType: 'document',
  },
}

const props = {
  title,
  text,
}

const description =
  'First images of temporary House of Commons Chamber revealed. Plans will include a new temporary House of Commons Chamber, as well as work-space for all 650 MPs and their staff within a single secure site.'

it('should render the component with the correct title and intro text', () => {
  const {getByText} = render(<PageIntro {...props} />)

  expect(getByText(title)).toBeDefined()
  expect(getByText(description)).toBeDefined()
})
