import React from 'react'
import {object, shape, string} from 'prop-types'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'
import Image from 'gatsby-image'

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
  heroTextContent: {
    padding: '20px 22px 43px 23px;',

    color: theme.palette.primary.text,
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      padding: '34px 32px 46px 30px',

      maxWidth: '1600px',
      margin: 'auto',
    },
  },
  heroSubTextContent: {
    fontSize: '24px',
    lineHeight: '36px',
  },
}))

const Hero = ({image: {title: heroImageTitle, fixed}}) => {
  const classes = useStyles()
  return (
    <Box component="section" className={classes.heroContainer}>
      <Box className={classes.imageWrapper}>
        <Image fixed={fixed} alt={heroImageTitle} />
      </Box>
    </Box>
  )
}

Hero.propTypes = {
  image: shape({
    title: string.isRequired,
    fixed: object.isRequired,
  }).isRequired,
}

export default Hero
