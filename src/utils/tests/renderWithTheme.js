import React from 'react'
import {render} from '@testing-library/react'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from '../theme'

export default children => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}
