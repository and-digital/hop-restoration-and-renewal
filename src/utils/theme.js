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
    links: {
      main: purple,
      mobileMenu: white,
    },
  },
})

export default responsiveFonts(theme)
