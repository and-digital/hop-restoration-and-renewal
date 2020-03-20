import React from 'react'
import {string, shape} from 'prop-types'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  contextWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '1620px',
    margin: 'auto',
    height: '100%',
  },
  articleBannerWrapper: {
    padding: '42px 39px 33px 30px',
    height: '100%',
    backgroundColor: theme.palette.background.hero,
    color: theme.palette.secondary.main,
    width: '100%',
    [theme.breakpoints.up(1620)]: {
      padding: '42px 0 43px 30px',
    },
  },
  articleBannerText: {
    fontSize: '36px',
    lineHeight: '48px',
    fontWeight: 'bold',
    color: '#ffffff',
    [theme.breakpoints.up('sm')]: {
      fontSize: '48px',
      fontWeight: 'normal',
      lineHeight: '60px',
    },
  },
}))

const ArticleBanner = section => {
  const classes = useStyles()
  const {name} = section
  return (
    <Box className={classes.articleBannerWrapper}>
      <Box maxWidth="1620" className={classes.contextWrapper}>
        <Typography variant="h1" className={classes.articleBannerText}>
          {name}
        </Typography>
      </Box>
    </Box>
  )
}

ArticleBanner.propTypes = {
  section: shape({
    name: string.isRequired,
  }).isRequired,
}

export default ArticleBanner
