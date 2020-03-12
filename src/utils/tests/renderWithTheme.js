import React from 'react'
import {render} from '@testing-library/react'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import theme from '../theme'

export default children =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
