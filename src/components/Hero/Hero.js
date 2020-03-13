import React from 'react'
import Image from 'gatsby-image'
import {shape, string, object} from 'prop-types'

const Hero = ({image: {title: heroImageTitle, fluid}}) => (
  <Image fluid={fluid} alt={heroImageTitle} />
)

Hero.propTypes = {
  image: shape({
    title: string.isRequired,
    fluid: object.isRequired,
  }).isRequired,
}

export default Hero
