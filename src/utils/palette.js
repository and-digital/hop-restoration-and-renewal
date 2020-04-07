import * as colors from './colors'
const {
  white,
  orange,
  oldWhite,
  whiteSmoke,
  deepPurple,
  oldLightPurple,
  nero,
  oldPurple,
  magenta,
  lilac,
  grey,
  lightGrey,
  jewel,
  mint,
  purple,
} = colors

export default {
  primary: {
    main: nero,
    text: nero,
    cross: oldWhite,
    menuText: purple,
    subtitle: mint,
  },
  secondary: {
    main: oldWhite,
    text: oldWhite,
  },
  background: {
    main: whiteSmoke,
    hero: deepPurple,
    mobileHero: magenta,
    desktopMenu: oldWhite,
    mobileMenu: lilac,
    card: oldWhite,
    footer: grey,
    cardBorder: oldPurple,
    sideBar: oldLightPurple,
    boxShadow: lightGrey,
  },
  link: {
    main: purple,
    mobileMenu: oldWhite,
    arrow: jewel,
    activeHighlight: white,
    activeHighlightBorder: orange,
  },
  text: {
    primary: nero,
    secondary: oldWhite,
  },
}
