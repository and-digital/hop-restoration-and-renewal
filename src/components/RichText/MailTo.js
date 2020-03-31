import React from 'react'
import {string} from 'prop-types'
import Obfuscate from 'react-obfuscate'
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

const MailTo = ({label, emailAddress, subject, body}) => {
  const classes = useStyles()
  return (
    <Typography variant="body1">
      {label}
      <Obfuscate
        data-testid="mailto-link"
        className={classes.richTextLink}
        email={emailAddress}
        headers={{
          subject,
          body,
        }}
      />
    </Typography>
  )
}

MailTo.propTypes = {
  label: string.isRequired,
  emailAddress: string.isRequired,
  subject: string.isRequired,
  body: string.isRequired,
}

MailTo.defaultProps = {
  subject: '',
  body: '',
}
export default MailTo
