import React from 'react'
import {arrayOf, shape, string} from 'prop-types'

import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  richTextLink: {
    color: theme.palette.link.main,
    lineHeight: '30px',
    display: 'inline-block',
    textDecoration: 'none',
    borderBottom: '3px solid',
    fontWeight: 'bold',
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
