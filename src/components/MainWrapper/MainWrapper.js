import React from 'react'
import {Helmet} from 'react-helmet'

import ThemeProvider from '@material-ui/styles/ThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import {node} from 'prop-types'
import theme from '../../utils/theme'

const MainWrapper = ({children}) => {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  )
}

MainWrapper.propTypes = {
  children: node.isRequired,
}

export default MainWrapper
