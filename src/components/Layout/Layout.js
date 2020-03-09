import React from 'react'
import Header from '../Header'
import {Helmet} from 'react-helmet'
import {string, node} from 'prop-types'
import {ThemeProvider} from '@material-ui/core'
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
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <main className={classes.body}>
          <>
            <Header />
            {children}
          </>
        </main>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
}

export default Layout
