import React from 'react'
import {object, shape, string} from 'prop-types'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'
import Image from 'gatsby-image'

const useStyles = makeStyles(() => ({
  heroContainer: {
    position: 'relative',
    height: 400,
    width: '100%',
    overflow: 'hidden',
  },
  imageWrapper: {
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    '& .gatsby-image-wrapper': {
      position: 'unset !important',
    },
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
