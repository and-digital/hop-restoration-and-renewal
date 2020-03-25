import React from 'react'
import {arrayOf, shape, string} from 'prop-types'
import {Link} from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
const dividerCharacter = '›'

const DesktopBreadcrumbs = ({breadcrumbs}) => (
  <Box padding="45px">
    <Typography variant="body1">
      <Link to="/" aria-label="Back to the Home">
        Home
      </Link>
      {breadcrumbs &&
        breadcrumbs.map(breadcrumb => (
          <span key={breadcrumb.slug}>
            <span> {dividerCharacter} </span>
            <Link to={breadcrumb.slug}>{breadcrumb.title}</Link>
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
}

export default DesktopBreadcrumbs
