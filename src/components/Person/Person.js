import React from 'react'
import {shape, string} from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import {Box} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  personWrapper: {
    flexDirection: 'column',
    width: '100%',
    display: 'flex',
    margin: '50px 0',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  avatar: {
    width: '190px',
    marginBottom: '24px',
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  contextWrapper: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '43px',
    },
  },
  title: {
    fontWeight: 'bold',
    paddingBottom: '20px',
  },
}))

const Person = ({
  avatar: {
    fields: {
      title: altText,
      file: {
        'en-US': {url},
      },
    },
  },
  title,
  description,
}) => {
  const classes = useStyles()

  return (
    <Box component="section" className={classes.personWrapper}>
      <Box className={classes.avatar}>
        <img src={url} alt={altText['en-US']} />
      </Box>
      <Box className={classes.contextWrapper}>
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.description} variant="body1">
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

Person.propTypes = {
  avatar: shape({
    fields: shape({
      title: shape({
        'en-US': string.isRequired,
      }),
      file: shape({
        'en-US': shape({
          url: string.isRequired,
        }),
      }),
    }),
  }).isRequired,
  title: string.isRequired,
  description: string.isRequired,
}

export default Person
