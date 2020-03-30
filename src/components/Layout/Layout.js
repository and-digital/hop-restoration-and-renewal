import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import {string, node} from 'prop-types'
import Box from '@material-ui/core/Box'
import theme from '../../utils/theme'
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import SEO from '../SEO'
import LocationProvider from '../../providers/LocationProvider'

const useStyles = makeStyles(theme => ({
  body: {
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.background.main,
    },
  },
}))

const Layout = ({title, children, section, article, childArticle}) => {
  const classes = useStyles()
  return (
    <LocationProvider
      section={section}
      article={article}
      childArticle={childArticle}
    >
      <SEO title={title} />
      <ThemeProvider theme={theme}>
        <Box component="main" className={classes.body}>
          <Header />
          <Box>{children}</Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </LocationProvider>
  )
}

Layout.propTypes = {
  title: string.isRequired,
  section: string,
  article: string,
  childArticle: string,
  children: node.isRequired,
}

export default Layout
