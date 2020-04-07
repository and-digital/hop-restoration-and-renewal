import React from 'react'
import Typography from '@material-ui/core/Typography'
import {string} from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  quote: {
    fontFamily: 'Brandon Text, Lato, Sans-Serif',
    fontWeight: 'normal',
    fontSize: '2rem',
    lineHeight: '1.16',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.3707rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.8017rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3.0172rem',
    },
    display: 'block',
    marginBottom: '20px',
  },
}))

const Quote = ({quoteText, quoteAuthor}) => {
  const styles = useStyles()
  return (
    <div>
      <q className={styles.quote}>{quoteText}</q>
      <Typography variant="h4">{quoteAuthor}</Typography>
    </div>
  )
}

Quote.propTypes = {
  quoteText: string.isRequired,
  quoteAuthor: string.isRequired,
}

export default Quote
