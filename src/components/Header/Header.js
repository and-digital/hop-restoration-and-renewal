import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import {shape, string, object, arrayOf} from 'prop-types'
import Image from 'gatsby-image'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import DesktopWrapper from './DesktopWrapper'
import MobileWrapper from './MobileWrapper'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Menu from './Menu'

const styles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.desktopMenu,
    boxShadow: '0px 5px 5px rgba(35, 35, 35, 0.1)',
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
}) => {
  const classes = styles()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const Wrapper = isDesktop ? DesktopWrapper : MobileWrapper
  return (
    <AppBar className={classes.root} data-testid="header">
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        maxWidth={1620}
        margin="auto"
        className={classes.box}
      >
        <Link to="/" className={classes.linkBox} aria-label={homePageLinkText}>
          <Image fluid={fluid} alt={title} className={classes.logo} />
        </Link>
        <Wrapper>
          <Menu sections={sections} />
        </Wrapper>
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
}

export default Header
