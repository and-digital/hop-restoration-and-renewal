import React from 'react'
import {shape, object, string} from 'prop-types'
import {Link} from 'gatsby'
import Image from 'gatsby-image'
import Typography from '@material-ui/core/Typography'
import RichText from '../RichText/RichText'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const SectionCard = ({
  image: {fluid, title},
  sectionTitle,
  body,
  linkText,
  slug,
}) => (
  <Card>
    <Image fluid={fluid} alt={title} />
    <CardContent>
      {sectionTitle}
      <RichText text={body} aria-label="section description" />
      <Link to={`/${slug}`}>
        <Typography variant="body1">{linkText}</Typography>
      </Link>
    </CardContent>
  </Card>
)

SectionCard.propTypes = {
  image: shape({
    title: string.isRequired,
    fluid: object.isRequired,
  }).isRequired,
  body: shape({
    json: object.isRequired,
  }).isRequired,
  slug: string.isRequired,
  linkText: string.isRequired,
  sectionTitle: string.isRequired,
}

export default SectionCard
