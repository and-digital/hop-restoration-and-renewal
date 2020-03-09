import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {Link} from 'gatsby'
import {arrayOf, shape, string} from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  gridOuter: {
    flexDirection: 'column',
    margin: '80px 105px 302px 50px',
    lineHeight: '96px',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'unset',
      margin: 'auto',
    },
  },
  link: {
    color: '#ffffff',
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
            <Link
              to={`/${slug}`}
              className={classes.link}
              data-testid={`section-link-${name}`}
            >
              <Typography variant="h6">{name}</Typography>
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
