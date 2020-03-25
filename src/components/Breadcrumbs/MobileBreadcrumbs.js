import React from 'react'
import {arrayOf, shape, string} from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import {Link} from 'gatsby'

const lastElement = array => {
  if (array && array.length > 0) {
    return array[array.length - 1]
  }
  return null
}

const MobileBreadcrumbs = ({breadcrumbs}) => {
  const lastBreadcrumb = lastElement(breadcrumbs)
  if (lastBreadcrumb) {
    return (
      <Box padding="20px">
        <Typography variant="body1">
          <span>‹ Back to </span>
          <Link to={lastBreadcrumb.slug}>{lastBreadcrumb.title}</Link>
        </Typography>
      </Box>
    )
  }
  return null
}

MobileBreadcrumbs.propTypes = {
  breadcrumbs: arrayOf(
    shape({
      title: string.isRequired,
      slug: string.isRequired,
    }),
  ).isRequired,
}

export default MobileBreadcrumbs
