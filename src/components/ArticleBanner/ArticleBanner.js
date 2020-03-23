import React from 'react'
import {string, shape} from 'prop-types'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  articleBannerWrapper: {
    padding: '42px 39px 33px 56px',
    backgroundColor: theme.palette.background.hero,
    color: theme.palette.secondary.main,
    [theme.breakpoints.up('xl')]: {
      padding: '42px 0 43px 30px',
    },
  },
  articleBannerText: {
    fontWeight: 'bold',
    color: '#ffffff',
    [theme.breakpoints.up('sm')]: {
      fontWeight: 'normal',
    },
  },
}))

const ArticleBanner = section => {
  const classes = useStyles()
  const {title} = section
  return (
    <Box width="100%" height="100%" className={classes.articleBannerWrapper}>
      <Box
        maxWidth={1620}
        position="relative"
        width="100%"
        height="100%"
        margin="auto"
      >
        <Typography variant="h1" className={classes.articleBannerText}>
          {title}
        </Typography>
      </Box>
    </Box>
  )
}

ArticleBanner.propTypes = {
  section: shape({
    title: string.isRequired,
  }).isRequired,
}

export default ArticleBanner
