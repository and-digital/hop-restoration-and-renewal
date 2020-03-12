import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {Link} from 'gatsby'
import {arrayOf, shape, string} from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    [theme.breakpoints.up('md')]: {color: theme.palette.primary.menuText},
  },
  activeLink: {
    display: 'inline-block',
    borderBottom: '5px solid',
  },
}))

const Menu = ({sections}) => {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      {sections.map(({name, slug}) => (
        <Grid item key={name} xs={12} sm={12} md="auto">
          <Link
            to={`/${slug}`}
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            <Typography variant="h6">{name}</Typography>
          </Link>
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
