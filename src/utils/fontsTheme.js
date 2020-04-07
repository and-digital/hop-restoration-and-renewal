import './fonts.css'

export default theme => ({
  ...theme.typography,
  fontFamily: ['Georgia', 'Brandon Text', 'Lato'].join(','),
  h1: {
    fontFamily: 'Georgia, Serif',
    fontWeight: 'bold',
    fontSize: '42px',
    lineHeight: '1.33',
  },
  h2: {
    fontFamily: 'Brandon, Lato, Sans-Serif',
    fontWeight: 'normal',
    fontSize: '28px',
    lineHeight: '1.58',
  },
  h3: {
    fontFamily: 'Georgia, Serif',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '1.25',
  },
  h4: {
    fontSize: '24px',
    lineHeight: '1.33',
    fontFamily: 'Brandon Text, Lato, Sans-Serif',
    fontWeight: 'bold',
  },
  body1: {
    fontSize: '21px',
    fontFamily: 'Brandon Text, Lato, Sans-Serif',
    lineHeight: '1.33',
  },
  body2: {
    fontSize: '16px',
    fontFamily: 'Brandon, Lato, Sans-Serif',
    lineHeight: '1.5',
  },
  caption: {
    fontStyle: 'italic',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '1.33',
  },
  subtitle1: {
    fontFamily: 'Georgia, Serif',
    fontSize: '24px',
    lineHeight: '1.33',
  },
})
