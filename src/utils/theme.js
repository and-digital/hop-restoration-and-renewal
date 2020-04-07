import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'
import palette from './palette'
import fontsTheme from './fontsTheme'

let theme = createMuiTheme({
  palette,
})

theme.typography = fontsTheme(theme)

theme = responsiveFontSizes(theme)

export default theme
