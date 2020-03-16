import React from 'react'
import {object, shape, string} from 'prop-types'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Image from 'gatsby-image'
import RichText from '../RichText'

const useStyles = makeStyles(theme => ({
  heroContainer: {
    position: 'relative',
    height: '605px',
    width: '100%',
    overflow: 'hidden',
  },
  imageWrapper: {
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'none',
    [theme.breakpoints.up('md')]: {display: 'block '},
    '& .gatsby-image-wrapper' : {
      position: 'unset !important',
    }
  },
  contextWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '1620px',
    margin: 'auto',
    height: '605px',
  },
  heroTextContent: {
    padding: '34px 30px',
    position: 'absolute',
    top: '0',
    backgroundColor: theme.palette.background.hero,
    color: theme.palette.secondary.main,
    width: '100%',
    height: '100%',
    '& h1': {
      fontSize: '64px',
      lineHeight: '60px',
      fontWeight: 'normal',
    },
    [theme.breakpoints.up('md')]: {
      width: '481px',
      height: '605px',
    },
  },
}))

const Hero = ({image: {title: heroImageTitle, fixed}, title, text}) => {
  const classes = useStyles()
  return (
    <Box component="section" className={classes.heroContainer}>
      <Box className={classes.imageWrapper}>
        <Image fixed={fixed} alt={heroImageTitle} />
      </Box>
      <Box maxWidth="1620" className={classes.contextWrapper}>
        <Box className={classes.heroTextContent}>
          <Typography variant="h1">
            {title}
          </Typography>
          {text &&<RichText text={text} />}
        </Box>
      </Box>
    </Box>
  )
}

Hero.propTypes = {
  image: shape({
    title: string.isRequired,
    fixed: object.isRequired,
  }).isRequired,
  title: string.isRequired,
  text: {
    json: object,
  },
}

export default Hero
