import React from 'react'
import {string, shape, arrayOf} from 'prop-types'
import Typography from '@material-ui/core/Typography'

const HeadingFive = (node, children) => (
  <Typography variant="h5">{children}</Typography>
)

HeadingFive.propTypes = {
  data: shape({
    uri: string.isRequired,
  }).isRequired,
  content: arrayOf(
    shape({
      value: string.isRequired,
    }),
  ).isRequired,
}

export default HeadingFive
