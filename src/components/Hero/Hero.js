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
    [theme.breakpoints.between('sm', 'md')]: {height: '400px'},
    [theme.breakpoints.between('md', 'lg')]: {height: '605px'},
  },
  imageWrapper: {
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'none',
    [theme.breakpoints.up('md')]: {display: 'block '},
    '& .gatsby-image-wrapper': {
      position: 'unset !important',
    },
  },
  contextWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '1620px',
    margin: 'auto',
    height: '100%',
  },
  heroTextContent: {
    padding: '20px 22px 43px 23px;',
    position: 'absolute',
    top: '0',
    opacity: '0.95',
    backgroundColor: theme.palette.background.hero,
    color: theme.palette.secondary.main,
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      padding: '34px 32px 46px 30px',
      width: '481px',
      height: '605px',
      left: '18px',
    },
  },
  heroSubTextContent: {
    fontSize: '24px',
    lineHeight: '36px',
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
          <Typography variant="h1">{title}</Typography>
          <RichText text={text} className={classes.heroSubTextContent} />
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
  text: shape({
    json: object.isRequired,
  }).isRequired,
}

export default Hero
