import {createMuiTheme} from '@material-ui/core/styles'
import * as colors from './palette'

const {white, whiteSmoke, deepPurple, nero, purple, lilac} = colors

const theme = createMuiTheme({
  palette: {
    primary: {
      main: nero,
      text: nero,
    },
    background: {
      main: whiteSmoke,
      hero: deepPurple,
      mobileMenu: lilac,
      card: white,
    },
    links: {
      main: purple,
    },
  },
})

export default theme
