import React from 'react'
import {string, shape, arrayOf} from 'prop-types'
import Typography from '@material-ui/core/Typography'

const HeadingFour = (node, children) => (
  <Typography variant="h4">{children}</Typography>
)

HeadingFour.propTypes = {
  data: shape({
    uri: string.isRequired,
  }).isRequired,
  content: arrayOf(
    shape({
      value: string.isRequired,
    }),
  ).isRequired,
}

export default HeadingFour
