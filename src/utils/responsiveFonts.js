export default theme => ({
  ...theme.typography,
  h1: {
    fontSize: '42px',
    lineHeight: '56px',
    fontWeight: 'bold',
    fontFamily: 'Georgia',
  },
  h2: {
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '36px',
    fontFamily: 'sans-serif',
    marginBottom: '14px',
    [theme.breakpoints.up('md')]: {
      fontSize: '36px',
      lineHeight: '48px',
      marginBottom: '20px',
    },
  },
  h3: {
    fontWeight: 'bold',
    fontSize: '21px',
    lineHeight: '32px',
    fontFamily: 'Lato',
  },
  h6: {
    fontSize: '28px',
    fontFamily: 'sans-serif',
    fontWeight: '400',
    [theme.breakpoints.up('md')]: {fontSize: '20px'},
    [theme.breakpoints.up('lg')]: {fontSize: '28px'},
  },
  body1: {
    fontSize: '16px',
    fontFamily: 'Lato',
    lineHeight: '26px',
    [theme.breakpoints.up('md')]: {
      fontSize: '24px',
    },
  },
  body2: {
    fontSize: '16px',
    fontFamily: 'Lato',
    lineHeight: '26px',
    marginBottom: '26px',
    [theme.breakpoints.up('md')]: {
      fontSize: '36px',
      lineHeight: '48px',
      marginBottom: '48px',
    },
  },
  caption: {
    fontStyle: 'italic',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '24px',
  },
  subtitle1: {
    fontFamily: 'Georgia',
    fontSize: '24px',
    lineHeight: '32px',

    [theme.breakpoints.up('lg')]: {
      fontSize: '48px',
      lineHeight: '56px',
    },
  },
  subtitle2: {
    fontFamily: 'Lato',
    fontSize: '48px',
    lineHeight: '56px',
    fontWeight: 'normal',
  },
})
