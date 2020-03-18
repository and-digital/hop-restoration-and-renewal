import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import {string, node} from 'prop-types'
import Box from '@material-ui/core/Box'
import theme from '../../utils/theme'
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import SEO from '../SEO'

const useStyles = makeStyles(theme => ({
  body: {
    background: theme.palette.background.main,
    minWidth: '360px',
  },
}))

const Layout = ({title, children}) => {
  const classes = useStyles()
  return (
    <>
      <SEO title={title} />
      <ThemeProvider theme={theme}>
        <Box component="main" className={classes.body}>
          <Header />
          <Box>{children}</Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
}

export default Layout
