import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import {fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import RichText from '..'
import RichTextProvider from '../../../providers/RichTextProvider'

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
        {
          data: {
            target: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'h5nvy9gnf018',
                    contentful_id: 'h5nvy9gnf018',
                  },
                },
                id: 'c5Vwn6i40gm8CVuwwnNLW4p',
                type: 'Entry',
                createdAt: '2020-03-16T14:51:03.777Z',
                updatedAt: '2020-03-16T14:51:03.777Z',
                environment: {
                  sys: {
                    id: 'master',
                    type: 'Link',
                    linkType: 'Environment',
                    contentful_id: 'master',
                  },
                },
                revision: 1,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'mailto',
                    contentful_id: 'mailto',
                  },
                },
                contentful_id: '5Vwn6i40gm8CVuwwnNLW4p',
              },
              fields: {
                name: {
                  'en-US': 'Restoration & Renewal',
                },
                label: {
                  'en-US':
                    'Contact the Restoration and Renewal Programme team at ',
                },
                emailAddress: {
                  'en-US': 'restorationandrenewal@parliament.uk',
                },
                subject: {
                  'en-US': 'subject',
                },
                body: {
                  'en-US': 'body',
                },
              },
            },
          },
          content: [],
          nodeType: 'embedded-entry-block',
        },
      ],
    },
  },
}

describe('Footer component', () => {
  it('should render the component', () => {
    const {getByText} = render(
      <RichTextProvider>
        <RichText {...props} />
      </RichTextProvider>,
    )
    expect(getByText(/Houses of Parliament/g)).toBeDefined()
    expect(getByText('Here is an external link')).toBeDefined()
  })

  it('should mask email address', () => {
    const {getByTestId} = render(
      <RichTextProvider>
        <RichText {...props} />
      </RichTextProvider>,
    )
    const MailtoLink = getByTestId('mailto-link')
    expect(MailtoLink).toBeInTheDocument()
    expect(MailtoLink).toHaveAttribute('href', 'obfuscated')
    fireEvent.mouseOver(MailtoLink)
    expect(MailtoLink).toHaveAttribute(
      'href',
      'mailto:restorationandrenewal@parliament.uk?body=body&subject=subject',
    )
  })
})
