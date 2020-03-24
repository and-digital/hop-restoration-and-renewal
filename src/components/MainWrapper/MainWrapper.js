import React from 'react'

import {ThemeProvider} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import {node} from 'prop-types'
import theme from '../../utils/theme'
import Analytics from '../Analytics'

const MainWrapper = ({element}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Analytics />
      {element}
    </ThemeProvider>
  )
}

MainWrapper.propTypes = {
  element: node.isRequired,
}

export default MainWrapper
