import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LinkHandler from '../LinkHandler'
import useLocation from '../../hooks/useLocation'
import {makeStyles} from '@material-ui/core/styles'
import classNames from 'classnames'
import {arrayOf, shape, string} from 'prop-types'

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.primary.menuText,
    textDecoration: 'none',
  },
  // linkWrapper: {
  //   backgroundColor: 'none',
  //   height: '160px',
  // },
  // activeLinkWrapper: {
  //   backgroundColor: '#FBFBFB',
  //   height: '160px',
  // },
  activeLink: {
    '& h6': {
      display: 'inline-block',
      borderBottom: '5px solid',
    },
  },
}))

const DesktopMenu = ({sections}) => {
  const classes = useStyles()
  const {section} = useLocation()
  return (
    <Box display="flex" alignItems="center" marginRight="10px" height="100%">
      <Grid container spacing={3} style={{width: 'calc(100% + 25px)'}}>
        {sections.map(({name, slug}) => (
          <Grid
            item
            key={name}
            xs={12}
            sm={12}
            md="auto"
            // className={classNames(classes.linkWrapper, {
            //   [classes.activeLinkWrapper]: slug === section,
            // })}
          >
            <LinkHandler
              url={`/${slug}`}
              className={classNames(classes.link, {
                [classes.activeLink]: slug === section,
              })}
              data-cy="navigation-link"
            >
              <Typography variant="h6">{name}</Typography>
            </LinkHandler>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

DesktopMenu.propTypes = {
  sections: arrayOf(
    shape({
      name: string.isRequired,
      slug: string.isRequired,
    }),
  ).isRequired,
}

export default DesktopMenu
