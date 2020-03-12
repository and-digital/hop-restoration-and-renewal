import React from 'react'
// import {data} from './FooterFragment'
import {shape, string, arrayOf} from 'prop-types'
import Grid from '@material-ui/core/Grid'
import {Link} from 'gatsby'
import Typography from '@material-ui/core/Typography'
import {graphql, useStaticQuery} from 'gatsby'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  hamburgerMenuLink: {
    color: theme.palette.link.mobileMenu,
    fontSize: '28px',
    textDecoration: 'none',
  },
  hamburgerMenuText: {
    fontSize: '28px',
    lineHeight: '40px',
  },
  gridOuter: {
    margin: '0 105px 58px 50px',
  },
}))

const FooterLinks = () => {
  const data = useStaticQuery(graphql`
    query FooterLinksHamburgerQuery {
      contentfulFooter {
        pages {
          name
          slug
        }
      }
    }
  `)
  return <FooterLinksComponent {...data} />
}

const FooterLinksComponent = ({contentfulFooter: {pages}}) => {
  const classes = useStyles()
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      className={classes.gridOuter}
    >
      {pages.map(({name, slug}) => (
        <Grid item key={name} xs={12} sm="auto">
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
  contentfulFooter: shape({
    pages: arrayOf(
      shape({
        name: string.isRequired,
        slug: string.isRequired,
      }).isRequired,
    ),
  }).isRequired,
}

export default FooterLinks
