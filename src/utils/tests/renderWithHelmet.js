import React from 'react'
import {render} from '@testing-library/react'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from '../theme'
import {HelmetProvider} from 'react-helmet-async'

export default children => {
  return render(
    <HelmetProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </HelmetProvider>,
  )
}
