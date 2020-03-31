import React from 'react'
import {node} from 'prop-types'

import {ThemeProvider} from '@material-ui/styles'

import theme from '../../utils/theme'
import Analytics from '../Analytics'

import './styles.css'

const MainWrapper = ({element}) => (
  <ThemeProvider theme={theme}>
    <Analytics />
    {element}
  </ThemeProvider>
)

MainWrapper.propTypes = {
  element: node.isRequired,
}

export default MainWrapper
