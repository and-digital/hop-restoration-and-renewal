import React from 'react'
import {string} from 'prop-types'

import {makeStyles} from '@material-ui/styles'
import {Typography} from '@material-ui/core'

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

const MailTo = ({label, emailAddress}) => {
  const classes = useStyles()
  return (
    <Typography variant="body1">
      {label}
      <a href={`mailto:${emailAddress}`} className={classes.richTextLink}>
        {emailAddress}
      </a>
    </Typography>
  )
}

MailTo.propTypes = {
  label: string.isRequired,
  emailAddress: string.isRequired,
}

export default MailTo
