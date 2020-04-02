import * as colors from './colors'
const {
  white,
  whiteSmoke,
  deepPurple,
  lightPurple,
  nero,
  purple,
  lilac,
  grey,
  lightGrey,
  jewel,
  mint,
} = colors

export default {
  primary: {
    main: nero,
    text: nero,
    cross: white,
    menuText: purple,
    subtitle: mint,
  },
  secondary: {
    main: white,
    text: white,
  },
  background: {
    main: whiteSmoke,
    hero: deepPurple,
    desktopMenu: white,
    mobileMenu: lilac,
    card: white,
    footer: grey,
    cardBorder: purple,
    sideBar: lightPurple,
    boxShadow: lightGrey,
  },
  link: {
    main: purple,
    mobileMenu: white,
    arrow: jewel,
  },
  text: {
    primary: nero,
    secondary: white,
  },
}
