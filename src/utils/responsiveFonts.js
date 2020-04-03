import './fonts.css'

export default theme => ({
  ...theme.typography,
  fontFamily: ['Georgia', 'Brandon Text', 'Lato'].join(','),
  h1: {
    fontFamily: 'Georgia, Serif',
    fontWeight: 'bold',
    fontSize: '42px',
    lineHeight: '56px',
  },
  h2: {
    fontFamily: 'Brandon, Lato, Sans-Serif',
    fontWeight: 'normal',
    fontSize: '28px',
    lineHeight: '38px',
  },
  h3: {
    fontFamily: 'Georgia, Serif',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '30px',
  },
  h4: {
    fontSize: '24px',
    lineHeight: '32px',
    fontFamily: 'Brandon Text, Lato, Sans-Serif',
    fontWeight: 'bold',
  },
  body1: {
    fontSize: '21px',
    fontFamily: 'Brandon Text, Lato, Sans-Serif',
    lineHeight: '32px',
  },
  body2: {
    fontSize: '16px',
    fontFamily: 'Brandon, Lato, Sans-Serif',
    lineHeight: '26px',
  },
  caption: {
    fontStyle: 'italic',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '24px',
  },
})
