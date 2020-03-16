import React from 'react'
import {string, shape, arrayOf} from 'prop-types'

import Typography from '@material-ui/core/Typography'

const Paragraph = (node, children) => (
  <Typography variant="body1">{children}</Typography>
)

Paragraph.propTypes = {
  data: shape({
    uri: string.isRequired,
  }).isRequired,
  content: arrayOf(
    shape({
      value: string.isRequired,
    }),
  ).isRequired,
}

export default Paragraph
