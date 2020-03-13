import React from 'react'
import {arrayOf, shape, string} from 'prop-types'
import Grid from '@material-ui/core/Grid'
import {Link} from 'gatsby'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  linkWrapper: {
    marginTop: '50px',
    '&.MuiGrid-item': {
      marginTop: '0px',
    },
  },
  hamburgerMenuLink: {
    color: theme.palette.link.mobileMenu,
    fontSize: '28px',
    textDecoration: 'none',
  },
  hamburgerMenuText: {
    fontSize: '28px',
    lineHeight: '40px',
  },
}))

const FooterLinksComponent = ({pages}) => {
  const classes = useStyles()
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      className={classes.linkWrapper}
    >
      {pages.map(({name, slug}) => (
        <Grid item key={name} xs={12} sm="auto" className={classes.linkWrapper}>
          <Link
            to={`/${slug}`}
            data-testid={`footer-link-${name}`}
            className={classes.hamburgerMenuLink}
          >
            <Typography variant="body1" className={classes.hamburgerMenuText}>
              {name}
            </Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

FooterLinksComponent.propTypes = {
  pages: arrayOf(
    shape({
      name: string.isRequired,
      slug: string.isRequired,
    }).isRequired,
  ),
}

export default FooterLinksComponent
