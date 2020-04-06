import * as colors from './colors'
const {
  white,
  whiteSmoke,
  deepPurple,
  lightPurple,
  nero,
  purple,
  lilac,
  pumpkin,
  grey,
  lightGrey,
  jewel,
  snow,
  blackcurrant,
  mint,
  mint30,
  mint40,
} = colors

export default {
  primary: {
    main: nero,
    text: nero,
    cross: white,
    menuText: blackcurrant,
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
    activeHighlight: snow,
    activeHighlightBorder: pumpkin,
  },
  text: {
    primary: nero,
    secondary: white,
  },
  section: {
    main: mint30,
    mint: mint,
    mint30: mint30,
    mint40: mint40,
  },
}
