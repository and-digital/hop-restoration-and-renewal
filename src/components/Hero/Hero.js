import React from 'react'
import {object, shape, string} from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Image from 'gatsby-image'

const useStyles = makeStyles(() => ({
  imageWrapper: {
    height: '388px',
  },
}))

const Hero = ({image: {title: heroImageTitle, fluid}}) => {
  const classes = useStyles()
  return (
    <Image
      fluid={fluid}
      alt={heroImageTitle}
      className={classes.imageWrapper}
    />
  )
}

Hero.propTypes = {
  image: shape({
    title: string.isRequired,
    fluid: object.isRequired,
  }).isRequired,
}

export default Hero
