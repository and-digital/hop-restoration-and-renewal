export default theme => ({
  ...theme.typography,
  body1: {
    fontSize: '18px',
    fontFamily: 'sans-serif',
  },

  h1: {
    fontSize: '36px',
    lineHeight: '48px',
    fontWeight: 'normal',
    marginBottom: '9px',
    [theme.breakpoints.up('md')]: {
      fontSize: '64px',
      lineHeight: '60px',
      marginBottom: '18px',
    },
  },
  h6: {
    fontSize: '28px',
    fontFamily: 'sans-serif',
    fontWeight: '400',
    [theme.breakpoints.up('md')]: {fontSize: '20px'},
    [theme.breakpoints.up('lg')]: {fontSize: '28px'},
  },
})
