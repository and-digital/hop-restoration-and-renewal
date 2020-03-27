import React from 'react'
import {node} from 'prop-types'
import LinkHandler from '../LinkHandler'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  breadcrumbLink: {
    color: theme.palette.primary.text,
  },
}))

const BreadcrumbLink = ({children, ...props}) => {
  const styles = useStyles()
  return (
    <LinkHandler {...props} className={styles.breadcrumbLink}>
      {children}
    </LinkHandler>
  )
}

BreadcrumbLink.propTypes = {
  children: node,
}

export default BreadcrumbLink
