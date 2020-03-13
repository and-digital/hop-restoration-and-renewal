import React from 'react'

import {ThemeProvider} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import {node} from 'prop-types'
import theme from '../../utils/theme'

const MainWrapper = ({element}) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {element}
  </ThemeProvider>
)

MainWrapper.propTypes = {
  element: node.isRequired,
}

export default MainWrapper
