import React from 'react'
import PropTypes from 'prop-types'
import {Box} from '@material-ui/core'
import {Link} from 'gatsby'

const Breadcrumbs = ({pathname}) => {
  let path = ''
  const breadcrumbs = []
  const splitPath = pathname.split('/').filter(slug => slug.length)

  splitPath.forEach(crumb => {
    path = `${path}/${crumb}`
    breadcrumbs.push({
      label: crumb
        .toLowerCase()
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.substring(1))
        .join(' '),
      slug: path,
    })
    breadcrumbs.push('/')
    return breadcrumbs
  })

  breadcrumbs.pop()

  return (
    <Box>
      <Link to="/" aria-label="Back to the Home">
        Home
      </Link>
      <span>/</span>

      {breadcrumbs &&
        breadcrumbs.map(crumb =>
          crumb.label ? (
            <Link to={crumb.slug}> {crumb.label}</Link>
          ) : (
            <span>{crumb}</span>
          ),
        )}
    </Box>
  )
}

Breadcrumbs.propTypes = {
  pathname: PropTypes.string.isRequired,
  showFinalBreadcrumb: PropTypes.bool,
}

Breadcrumbs.defaultProps = {
  showFinalBreadcrumb: false,
}

export default Breadcrumbs
