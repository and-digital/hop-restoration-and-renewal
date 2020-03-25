import React from 'react'
import {arrayOf, string, shape} from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import MobileBreadcrumbs from './MobileBreadcrumbs'
import DesktopBreadcrumbs from './DesktopBreadcrumbs'
import Hidden from '../Hidden/Hidden'

const useStyles = makeStyles(theme => ({
  breadcrumbLink: {
    '& a': {
      color: theme.palette.primary.text,
    },
  },
}))

const Breadcrumbs = ({breadcrumbs}) => {
  const styles = useStyles()
  return (
    <div className={styles.breadcrumbLink}>
      <Hidden mdUp>
        <MobileBreadcrumbs breadcrumbs={breadcrumbs} />
      </Hidden>
      <Hidden smDown>
        <DesktopBreadcrumbs breadcrumbs={breadcrumbs} />
      </Hidden>
    </div>
  )
}

Breadcrumbs.propTypes = {
  breadcrumbs: arrayOf(
    shape({
      title: string.isRequired,
      slug: string.isRequired,
    }),
  ).isRequired,
}

export default Breadcrumbs
