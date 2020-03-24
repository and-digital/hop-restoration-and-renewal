import React from 'react'
import {string, shape, arrayOf} from 'prop-types'
import Typography from '@material-ui/core/Typography'

const HeadingSix = (node, children) => (
  <Typography variant="h6">{children}</Typography>
)

HeadingSix.propTypes = {
  data: shape({
    uri: string.isRequired,
  }).isRequired,
  content: arrayOf(
    shape({
      value: string.isRequired,
    }),
  ).isRequired,
}

export default HeadingSix
