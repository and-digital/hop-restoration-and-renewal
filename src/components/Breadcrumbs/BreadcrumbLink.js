import React from 'react'
import {node} from 'prop-types'
import {Link} from 'gatsby'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  breadcrumbLink: {
    color: theme.palette.primary.text,
  },
}))

const BreadcrumbLink = ({children, ...props}) => {
  const styles = useStyles()
  return (
    <Link {...props} className={styles.breadcrumbLink}>
      {children}
    </Link>
  )
}

BreadcrumbLink.propTypes = {
  children: node,
}

export default BreadcrumbLink
