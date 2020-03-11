export default theme => ({
  ...theme.typography,
  h6: {
    fontSize: '28px',
    fontFamily: 'sans-serif',
    fontWeight: '400',
    [theme.breakpoints.up('md')]: {fontSize: '20px'},
    [theme.breakpoints.up('lg')]: {fontSize: '28px'},
  },
})
