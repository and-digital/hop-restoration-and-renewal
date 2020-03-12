import React from 'react'
import Header from '../Header'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import {string, node} from 'prop-types'
import {ThemeProvider} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import theme from '../../utils/theme'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  body: {
    background: theme.palette.background.main,
  },
}))

const Layout = ({title, children}) => {
  const classes = useStyles()

  return (
    <HelmetProvider>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <Box component="main" className={classes.body}>
          <Header />
          <Box maxWidth={1620} margin="auto">
            {children}
          </Box>
        </Box>
      </ThemeProvider>
    </HelmetProvider>
  )
}

Layout.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
}

export default Layout
