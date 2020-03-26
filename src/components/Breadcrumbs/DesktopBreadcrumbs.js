import React from 'react'
import {arrayOf, shape, string} from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import BreadcrumbLink from './BreadcrumbLink'

const DesktopBreadcrumbs = ({breadcrumbs, dividerCharacter, homepageText}) => (
  <Box>
    <Typography variant="body1">
      <BreadcrumbLink to="/">{homepageText}</BreadcrumbLink>
      {breadcrumbs &&
        breadcrumbs.map(breadcrumb => (
          <span key={breadcrumb.slug}>
            <span> {dividerCharacter} </span>
            <BreadcrumbLink to={breadcrumb.slug}>
              {breadcrumb.title}
            </BreadcrumbLink>
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
