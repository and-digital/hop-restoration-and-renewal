import React from 'react'
import classNames from 'classnames'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LinkHandler from '../LinkHandler'
import {arrayOf, shape, string} from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import useLocation from '../../hooks/useLocation'

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    [theme.breakpoints.up('md')]: {color: theme.palette.primary.menuText},
  },
  activeLink: {
    '& h6': {
      lineHeight: '40px',
      [theme.breakpoints.up('md')]: {lineHeight: 'unset'},
      display: 'inline-block',
      borderBottom: '5px solid',
    },
  },
}))

const Menu = ({sections}) => {
  const classes = useStyles()
  const {section} = useLocation()

  return (
    <Grid container spacing={3} style={{width: 'calc(100% + 25px)'}}>
      {sections.map(({name, slug}) => (
        <Grid item key={name} xs={12} sm={12} md="auto">
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
  )
}

Menu.propTypes = {
  sections: arrayOf(
    shape({
      name: string.isRequired,
      slug: string.isRequired,
    }),
  ).isRequired,
}

export default Menu
