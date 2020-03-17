export default theme => ({
  ...theme.typography,
  body1: {
    fontSize: '18px',
    fontFamily: 'sans-serif',
    [theme.breakpoints.up('md')]: {
      fontSize: '24px',
    },
  },
  body2: {
    fontSize: '24px',
    fontFamily: 'sans-serif',
    lineHeight: '30px',
  },
  h2: {
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '36px',
    fontFamily: 'sans-serif',
    [theme.breakpoints.up('md')]: {
      fontWeight: '500',
      lineHeight: '30px',
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
