import React from 'react'
import {node} from 'prop-types'
import LinkHandler from '../LinkHandler'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  breadcrumbLink: {
    fontWeight: 'bold',
  },
}))

const BreadcrumbLink = ({children, ...props}) => {
  const classes = useStyles()
  return (
    <LinkHandler {...props} className={classes.breadcrumbLink}>
      {children}
    </LinkHandler>
  )
}

BreadcrumbLink.propTypes = {
  children: node,
}

export default BreadcrumbLink
