import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'
import EmbeddedAsset from '../EmbeddedAsset'

describe('EmbeddedAsset', () => {
  const props = {
    data: {
      target: {
        fields: {
          file: {
            'en-US': {
              contentType: '',
              url: 'testUrl',
              details: {
                size: 13264,
              },
            },
          },
          title: {
            'en-US': 'testTitle',
          },
        },
      },
    },
  }

  it('should render an image when passed the correct content type', () => {
    props.data.target.fields.file['en-US'].contentType = 'image/png'
    const {getByAltText} = render(<EmbeddedAsset {...props} />)
    expect(getByAltText('testTitle')).toBeDefined()
  })

  it('should render a fileLink when passed a contentType string ending with pdf', () => {
    props.data.target.fields.file['en-US'].contentType = 'application/pdf'
    const {getByText} = render(<EmbeddedAsset {...props} />)
    const fileText = getByText('testTitle')
    expect(fileText).toBeDefined()
    expect(fileText.parentNode).toHaveAttribute('href', 'testUrl')
  })

  it('should not render anything if content type not recognised', () => {
    props.data.target.fields.file['en-US'].contentType =
      'application/adamsgreatfileformat'
    const {container} = render(<EmbeddedAsset {...props} />)
    expect(container).toBeEmpty()
  })
})
