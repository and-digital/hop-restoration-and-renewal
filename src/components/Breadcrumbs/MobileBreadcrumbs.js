import React from 'react'
import {arrayOf, shape, string} from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import BreadcrumbLink from './BreadcrumbLink'

const MobileBreadcrumbs = ({breadcrumbs, backText}) => {
  const lastBreadcrumb =
    breadcrumbs.length === 0
      ? {
          slug: '',
          title: 'Home',
        }
      : breadcrumbs[breadcrumbs.length - 1]

  return (
    <Box>
      <Typography variant="body1">
        <span>{backText}</span>
        <BreadcrumbLink url={`/${lastBreadcrumb.slug}`}>
          {lastBreadcrumb.title}
        </BreadcrumbLink>
      </Typography>
    </Box>
  )
}

MobileBreadcrumbs.propTypes = {
  breadcrumbs: arrayOf(
    shape({
      title: string.isRequired,
      slug: string.isRequired,
    }),
  ).isRequired,
  backText: string.isRequired,
}

export default MobileBreadcrumbs
