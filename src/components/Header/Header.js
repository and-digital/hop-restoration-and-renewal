import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {shape, string, object, arrayOf} from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

const styles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.desktopMenu,
    boxShadow: 'none',
    [theme.breakpoints.up('md')]: {
      boxShadow: '0px 5px 5px rgba(35, 35, 35, 0.1)',
    },
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
            maxWidth: 460
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
  contentfulHeader: {sections, logo, homePageLinkText},
  contentfulFooter: {pages},
}) => {
  const classes = styles()

  return (
    <AppBar className={classes.root} data-testid="header" position="relative">
      <Hidden implementation="css" lgUp>
        <MobileMenu
          footerLinks={pages}
          sections={sections}
          logo={logo}
          homePageLinkText={homePageLinkText}
        />
      </Hidden>
      <Hidden implementation="css" mdDown>
        <DesktopMenu
          sections={sections}
          logo={logo}
          homePageLinkText={homePageLinkText}
        />
      </Hidden>
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
