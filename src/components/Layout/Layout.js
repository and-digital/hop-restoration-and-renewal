import React from 'react'
import Header from '../Header'
import {Helmet} from 'react-helmet'
import {string, node} from 'prop-types'
import {ThemeProvider} from '@material-ui/core'
import theme from '../../utils/theme'

const Layout = ({title, children}) => (
  <>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
    </Helmet>
    <ThemeProvider theme={theme}>
      <main style={{background: '#fff'}}>
        <>
          <Header />
          {children}
        </>
      </main>
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
}

export default Layout
