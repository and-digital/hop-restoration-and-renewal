import React from 'react'
import {object, shape, string} from 'prop-types'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Image from 'gatsby-image'

const useStyles = makeStyles(theme => ({
  heroContainer: {
    position: 'relative',
    height: 'auto',
    width: '100%',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {height: '605px'},
  },
  imageWrapper: {
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'none',
    [theme.breakpoints.up('md')]: {display: 'block '},
  },
  contextWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'left-align',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      textAlign: 'center',
    },
  },
  heroTextContent: {
    margin: 'auto',
    padding: '34px 32px 46px 30px',
    backgroundColor: theme.palette.background.mobileHero,
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'inline-block',
      backgroundColor: theme.palette.background.hero,
    },
    [theme.breakpoints.up('lg')]: {
      width: 'auto',
    },
  },
  heroTitle: {
    color: theme.palette.secondary.main,
    fontSize: '36px',
    lineHeight: '44px',
    marginBottom: '15px',

    [theme.breakpoints.up('md')]: {
      fontSize: '48px',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '64px',
      lineHeight: '70px',
      marginBottom: '25px',
    },
  },
  heroSubtitle: {
    color: theme.palette.primary.subtitle,
  },
  heroImage: {
    height: 'auto',
    [theme.breakpoints.up('md')]: {height: '605px'},
  },
}))

const HeroHomepage = ({
  image: {title: heroImageTitle, fluid},
  title,
  subtitle,
}) => {
  const classes = useStyles()
  return (
    <Box component="section" className={classes.heroContainer}>
      <Box className={classes.imageWrapper}>
        <Image
          fluid={fluid}
          alt={heroImageTitle}
          className={classes.heroImage}
        />
      </Box>
      <Box className={classes.contextWrapper}>
        <Box className={classes.heroTextContent}>
          <Typography className={classes.heroTitle} variant="h1">
            {title}
          </Typography>
          <Typography
            className={classes.heroSubtitle}
            component="h2"
            variant="subtitle1"
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

HeroHomepage.propTypes = {
  image: shape({
    title: string.isRequired,
    fluid: object.isRequired,
  }).isRequired,
  title: string.isRequired,
  subtitle: string,
}

export default HeroHomepage
