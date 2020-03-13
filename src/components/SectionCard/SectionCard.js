import React from 'react'
import {shape, object, string} from 'prop-types'
import {Link} from 'gatsby'
import Image from 'gatsby-image'
import Typography from '@material-ui/core/Typography'

const SectionCard = ({image: {fluid, title}, linkText, slug}) => (
  <>
    <Image fluid={fluid} alt={title} />
    <Link to={`/${slug}`}>
      <Typography variant="body1">{linkText}</Typography>
    </Link>
  </>
)

SectionCard.propTypes = {
  image: shape({
    title: string.isRequired,
    fluid: object.isRequired,
  }).isRequired,
  slug: string.isRequired,
  linkText: string.isRequired,
}

export default SectionCard
