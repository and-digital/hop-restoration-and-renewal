import React from 'react'
import PropTypes from 'prop-types'
import {Box} from '@material-ui/core'
import {Link} from 'gatsby'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  breadcrumbLink: {
    color: theme.palette.primary.text,
  },
}))

const lastElement = array => {
  if (array && array.length > 0) {
    return array[array.length - 1]
  }
  return
}

const dividerCharacter = '›'

const Breadcrumbs = ({breadcrumbs}) => {
  const styles = useStyles()
  const lastBreadcrumb = lastElement(breadcrumbs)
  return (
    <>
      <Box
        padding="20px"
        display={{md: 'none'}}
        data-testid="mobile-breadcrumbs"
      >
        {lastBreadcrumb && (
          <Typography variant="body1">
            <span>‹ Back to </span>
            <Link to={lastBreadcrumb.slug} className={styles.breadcrumbLink}>
              {lastBreadcrumb.title}
            </Link>
          </Typography>
        )}
      </Box>
      <Box
        padding="45px"
        display={{xs: 'none', md: 'block'}}
        data-testid="desktop-breadcrumbs"
      >
        <Typography variant="body1">
          <Link
            to="/"
            className={styles.breadcrumbLink}
            aria-label="Back to the Home"
          >
            Home
          </Link>
          {breadcrumbs &&
            breadcrumbs.map(breadcrumb => (
              <span key={breadcrumb.slug}>
                <span> {dividerCharacter} </span>
                <Link to={breadcrumb.slug} className={styles.breadcrumbLink}>
                  {breadcrumb.title}
                </Link>
              </span>
            ))}
        </Typography>
      </Box>
    </>
  )
}

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default Breadcrumbs
