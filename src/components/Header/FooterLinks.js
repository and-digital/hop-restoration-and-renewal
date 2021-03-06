import React from 'react'
import {arrayOf, shape, string} from 'prop-types'
import Grid from '@material-ui/core/Grid'
import LinkHandler from '../LinkHandler'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  linkWrapper: {
    marginTop: '99px',
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
    lineHeight: '48px',
    fontWeight: 'normal',
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
        <Grid item key={name} xs={12} sm="auto">
          <LinkHandler
            url={`/${slug}`}
            data-testid={`footer-link-${name}`}
            className={classes.hamburgerMenuLink}
          >
            <Typography variant="body1" className={classes.hamburgerMenuText}>
              {name}
            </Typography>
          </LinkHandler>
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
