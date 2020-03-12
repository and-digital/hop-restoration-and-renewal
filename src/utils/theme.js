import {createMuiTheme} from '@material-ui/core/styles'
import * as colors from './palette'
import responsiveFonts from './responsiveFonts'
const {white, whiteSmoke, deepPurple, nero, purple, lilac, grey} = colors

const theme = createMuiTheme({
  palette: {
    primary: {
      main: nero,
      text: nero,
      cross: white,
      menuText: purple,
    },
    secondary: {
      main: white,
    },
    background: {
      main: whiteSmoke,
      hero: deepPurple,
      desktopMenu: white,
      mobileMenu: lilac,
      card: white,
      footer: grey,
    },
    link: {
      main: purple,
      mobileMenu: white,
    },
  },
})

theme.typography = responsiveFonts(theme)

export default theme
