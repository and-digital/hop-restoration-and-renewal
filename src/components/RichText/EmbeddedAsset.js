import React from 'react'
import {shape, object} from 'prop-types'
import {Box} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const EmbeddedAsset = ({
  data: {
    target: {
      fields: {file, title},
    },
  },
}) => (
  <Box>
    <img src={file['en-US'].url} alt={title['en-US']} />
    <Typography variant="body1" className="image-description">
      {title['en-US']}
    </Typography>
  </Box>
)

EmbeddedAsset.propTypes = {
  data: shape({
    target: shape({
      fields: shape({
        file: shape(object).isRequired,
        title: shape(object).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default EmbeddedAsset
