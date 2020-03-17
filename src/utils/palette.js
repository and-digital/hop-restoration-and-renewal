import * as colors from './colors'
const {white, whiteSmoke, deepPurple, nero, purple, lilac, grey, jewel} = colors

export default {
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
    cardBorder: purple,
  },
  link: {
    main: purple,
    mobileMenu: white,
    arrow: jewel,
  },
}
