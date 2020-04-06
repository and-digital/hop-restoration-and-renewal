import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'
import palette from './palette'
import responsiveFonts from './responsiveFonts'

let theme = createMuiTheme({
  palette,
})

theme.typography = responsiveFonts(theme)

theme = responsiveFontSizes(theme)

export default theme
