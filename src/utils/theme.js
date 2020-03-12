import {createMuiTheme} from '@material-ui/core/styles'
import palette from './palette'
import responsiveFonts from './responsiveFonts'

const theme = createMuiTheme({
  palette,
})

theme.typography = responsiveFonts(theme)

export default theme
