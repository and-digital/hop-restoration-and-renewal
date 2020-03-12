import React from 'react'
// import {data} from './FooterFragment'
import {graphql, useStaticQuery} from 'gatsby'
import {shape, object} from 'prop-types'
import RichText from '../RichText'
import FooterLinks from './FooterLinks'
import Box from '@material-ui/core/Box'
import {useTheme} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  footerWrapper: {
    padding: '27px 63px 13px 29px',
    minHeight: '418px',
    [theme.breakpoints.up('md')]: {
      padding: '27px 23px 28px 200px',
      minHeight: '278px',
    },
  },
  copyrightText: {
    fontSize: '18px',
    fontFamily: 'sans-serif',
    color: theme.palette.primary.main,
    lineHeight: '40px',
  },
}))

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter {
        copyrightAndContact {
          json
        }
      }
    }
  `)
  return <FooterComponent {...data} />
}

const FooterComponent = ({contentfulFooter: {copyrightAndContact}}) => {
  const theme = useTheme()
  const classes = useStyles()
  return (
    <footer>
      <Box
        bgcolor={theme.palette.background.footer}
        className={classes.footerWrapper}
      >
        <FooterLinks />
        <RichText
          text={copyrightAndContact}
          className={classes.copyrightText}
        />
      </Box>
    </footer>
  )
}

FooterComponent.propTypes = {
  contentfulFooter: shape({
    copyrightAndContact: shape({
      json: object.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Footer
