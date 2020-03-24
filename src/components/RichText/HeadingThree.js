import React from 'react'
import {string, shape, arrayOf} from 'prop-types'
import Typography from '@material-ui/core/Typography'

const HeadingThree = (node, children) => (
  <Typography variant="h3">{children}</Typography>
)

HeadingThree.propTypes = {
  data: shape({
    uri: string.isRequired,
  }).isRequired,
  content: arrayOf(
    shape({
      value: string.isRequired,
    }),
  ).isRequired,
}

export default HeadingThree
