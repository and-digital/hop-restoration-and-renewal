import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import {Link} from 'gatsby'
import {arrayOf, shape, string} from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  gridOuter: {
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {flexDirection: 'row', alignItems: 'unset'},
  },
  link: {
    color: '#ffffff',
    fontFamily: 'Georgia',
    textDecoration: 'none',
    [theme.breakpoints.up('md')]: {color: '#000000'},
  },
}))

const Menu = ({sections}) => {
  const classes = useStyles()
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Grid container spacing={3} className={classes.gridOuter}>
        {sections.map(({name, slug}) => (
          <Grid item key={name} xs={12} sm="auto">
            <Link to={`/${slug}`} className={classes.link}>
              {name}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
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
