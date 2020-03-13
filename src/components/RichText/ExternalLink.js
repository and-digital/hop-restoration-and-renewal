import React from 'react'
import {string, shape, arrayOf} from 'prop-types'

import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  richTextLink: {
    color: theme.palette.link.main,
  },
}))

const ExternalLink = ({data: {uri}, content: [{value: text}]}) => {
  const classes = useStyles()
  return (
    <a
      href={uri}
      className={classes.richTextLink}
      data-testid="hyperlink-richtext"
    >
      {text}
    </a>
  )
}

ExternalLink.propTypes = {
  data: shape({
    uri: string.isRequired,
  }).isRequired,
  content: arrayOf(
    shape({
      value: string.isRequired,
    }),
  ).isRequired,
}

export default ExternalLink
