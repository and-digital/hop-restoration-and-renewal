import * as colors from './colors'
const {
  oldWhite,
  whiteSmoke,
  deepPurple,
  oldLightPurple,
  nero,
  oldPurple,
  lilac,
  grey,
  lightGrey,
  jewel,
  purple,
} = colors

export default {
  primary: {
    main: nero,
    text: nero,
    cross: oldWhite,
    menuText: oldPurple,
  },
  secondary: {
    main: oldWhite,
    text: oldWhite,
  },
  background: {
    main: whiteSmoke,
    hero: deepPurple,
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
  },
  text: {
    primary: nero,
    secondary: oldWhite,
  },
}
