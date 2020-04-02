import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {shape, string, object, arrayOf} from 'prop-types'
import Image from 'gatsby-image'
import {makeStyles} from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import LinkHandler from '../LinkHandler'

const styles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.desktopMenu,
    boxShadow: 'none',
    [theme.breakpoints.up('md')]: {
      boxShadow: '0px 5px 5px rgba(35, 35, 35, 0.1)',
    },
  },
  linkBox: {
    boxSizing: 'border-box',
    padding: '20px 22px 20px 12px',
  },
  logo: {
    width: '262px',
    height: '48px',
    [theme.breakpoints.up('lg')]: {width: '450px', height: '82px'},
    [theme.breakpoints.up('md')]: {width: '300px', height: '58px'},
  },
}))

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      contentfulHeader(name: {eq: "main"}) {
        sections {
          name
          slug
        }
        homePageLinkText
        logo {
          fluid(
            maxWidth: 450
            cropFocus: CENTER
            resizingBehavior: FILL
            quality: 85
          ) {
            ...GatsbyContentfulFluid_withWebp
          }
          title
        }
      }
      contentfulFooter {
        pages {
          name
          slug
        }
      }
    }
  `)
  return <HeaderComponent {...data} />
}

const HeaderComponent = ({
  contentfulHeader: {
    sections,
    logo: {fluid, title},
    homePageLinkText,
  },
  contentfulFooter: {pages},
}) => {
  const classes = styles()

  return (
    <AppBar className={classes.root} data-testid="header" position="relative">
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        maxWidth={1620}
        margin="auto"
        className={classes.box}
      >
        <LinkHandler
          url="/"
          className={classes.linkBox}
          aria-label={homePageLinkText}
        >
          <Image fluid={fluid} alt={title} className={classes.logo} />
        </LinkHandler>
        <Hidden implementation="css" mdUp>
          <MobileMenu footerLinks={pages} sections={sections} />
        </Hidden>
        <Hidden implementation="css" smDown>
          <DesktopMenu sections={sections} />
        </Hidden>
      </Box>
    </AppBar>
  )
}

HeaderComponent.propTypes = {
  contentfulHeader: shape({
    sections: arrayOf(shape({name: string.isRequired, slug: string.isRequired}))
      .isRequired,
    logo: shape({fluid: object.isRequired, title: string.isRequired})
      .isRequired,
    homePageLinkText: string.isRequired,
  }).isRequired,
  contentfulFooter: shape({
    pages: arrayOf(object).isRequired,
  }).isRequired,
}

export default Header
