import React from 'react'
import {waitForDomChange} from '@testing-library/react'

import render from '../../../utils/tests/renderWithTheme'
import mockFooter from '../../../stubs/mockFooter'
import mockHeader from '../../../stubs/mockHeader'
import mockSEO from '../../../stubs/mockSEO'

import Page from '..'

const data = {
  contentfulPage: {
    title: 'page',
    template: {
      content: {
        json: {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: 'Sorry, we could not find that page',
                  nodeType: 'text',
                },
              ],
              nodeType: 'heading-1',
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: 'The page might have been moved or deleted',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: 'You can:',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Check the address for this page is correct',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'list-item',
                },
              ],
              nodeType: 'unordered-list',
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: '',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
          nodeType: 'document',
        },
      },
    },
  },
}

it('should render the component', async () => {
  mockSEO()
  mockHeader()
  mockFooter()
  const {getByText} = render(<Page data={data} />)
  await waitForDomChange()
  expect(getByText(/Sorry, we could not find that page/g)).toBeDefined()
})
