import React from 'react'
import {shape, string, number} from 'prop-types'
import ImageWrapper from './ImageWrapper'
import FileLink from './FileLink'

const EmbeddedAsset = ({
  data: {
    target: {
      fields: {
        file: {
          'en-US': {
            contentType,
            url,
            details: {size},
          },
        },
        title,
      },
    },
  },
}) => {
  if (contentType.startsWith('image')) {
    return <ImageWrapper url={url} title={title['en-US']} />
  } else if (contentType.endsWith('pdf')) {
    return (
      <FileLink
        url={url}
        title={title['en-US']}
        size={size}
        contentType={contentType}
      />
    )
  }
  return null
}

EmbeddedAsset.propTypes = {
  data: shape({
    target: shape({
      fields: shape({
        file: shape({
          'en-US': shape({
            contentType: string.isRequired,
            url: string.isRequired,
            details: shape({size: number.isRequired}),
          }).isRequired,
        }).isRequired,
        title: shape({
          'en-US': string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default EmbeddedAsset
