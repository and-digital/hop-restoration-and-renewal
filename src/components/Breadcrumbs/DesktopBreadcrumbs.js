import React from 'react'
import {arrayOf, shape, string} from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import BreadcrumbLink from './BreadcrumbLink'

const DesktopBreadcrumbs = ({breadcrumbs, dividerCharacter, homepageText}) => (
  <Box>
    <Typography variant="body1">
      <BreadcrumbLink url="/">{homepageText}</BreadcrumbLink>
      {breadcrumbs &&
        breadcrumbs.map(({slug, title}) => (
          <span key={slug}>
            <span> {dividerCharacter} </span>
            <BreadcrumbLink url={`/${slug}`}>{title}</BreadcrumbLink>
          </span>
        ))}
    </Typography>
  </Box>
)

DesktopBreadcrumbs.propTypes = {
  breadcrumbs: arrayOf(
    shape({
      title: string.isRequired,
      slug: string.isRequired,
    }),
  ).isRequired,
  dividerCharacter: string.isRequired,
  homepageText: string.isRequired,
}

export default DesktopBreadcrumbs
