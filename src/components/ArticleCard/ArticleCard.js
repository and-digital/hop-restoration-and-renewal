import React from 'react'
import {string} from 'prop-types'

import {Link} from 'gatsby'
import Typography from '@material-ui/core/Typography'

const ArticleCard = ({linkText, slug, sectionSlug}) => (
  <>
    <Link to={`/${sectionSlug}/${slug}`}>
      <Typography variant="body1">{linkText}</Typography>
    </Link>
  </>
)

ArticleCard.propTypes = {
  slug: string.isRequired,
  sectionSlug: string.isRequired,
  linkText: string.isRequired,
}

export default ArticleCard
