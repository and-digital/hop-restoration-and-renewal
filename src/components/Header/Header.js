import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {shape, string, object, arrayOf} from 'prop-types'

import Image from 'gatsby-image'
import {makeStyles} from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'

import DesktopWrapper from './DesktopWrapper'
import MobileWrapper from './MobileWrapper'
import {useMediaQuery, useTheme} from '@material-ui/core'
import Menu from './Menu'

const styles = makeStyles({
  root: {
    backgroundColor: '#ffffff',
    boxShadow: '0px 5px 5px rgba(35, 35, 35, 0.1)',
  },
})

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      contentfulHeader(name: {eq: "main"}) {
        sections {
          name
          slug
        }
        logo {
          fixed {
            ...GatsbyContentfulFixed_withWebp
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
    logo: {fixed, title},
  },
}) => {
  const classes = styles()
  const theme = useTheme()
  const isNotMobile = useMediaQuery(theme.breakpoints.up('sm'))
  const Wrapper = isNotMobile ? DesktopWrapper : MobileWrapper
  return (
    <AppBar className={classes.root} data-testid="header">
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        maxWidth={1560}
        margin="auto"
      >
        <Image fixed={fixed} alt={title} />
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
    logo: shape({fixed: object.isRequired, title: string.isRequired})
      .isRequired,
  }).isRequired,
}

export default Header
