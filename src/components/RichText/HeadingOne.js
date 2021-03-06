import React from 'react'
import {string, shape, arrayOf} from 'prop-types'
import Typography from '@material-ui/core/Typography'

const HeadingOne = (node, children) => (
  <Typography variant="h1">{children}</Typography>
)

HeadingOne.propTypes = {
  data: shape({
    uri: string.isRequired,
  }).isRequired,
  content: arrayOf(
    shape({
      value: string.isRequired,
    }),
  ).isRequired,
}

export default HeadingOne
