import React from 'react'
import {shape, object} from 'prop-types'

const EmbeddedAsset = ({
  data: {
    target: {
      fields: {file, title},
    },
  },
}) => {
  return <img src={file['en-US'].url} alt={title['en-US']} />
}

EmbeddedAsset.propTypes = {
  data: shape({
    target: shape({
      fields: shape({
        file: shape(object).isRequired,
        title: shape(object).isRequired,
      }).isRequired,
    }).isRequired,
    fields: shape(object).isRequired,
  }).isRequired,
}

export default EmbeddedAsset
