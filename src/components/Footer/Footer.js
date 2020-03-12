import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {shape, object, arrayOf} from 'prop-types'
import RichText from '../RichText'
import FooterLinks from './FooterLinks'
import Box from '@material-ui/core/Box'
import {makeStyles, useTheme} from '@material-ui/core/styles'

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
        pages {
          name
          slug
        }
      }
    }
  `)
  return <FooterComponent {...data} />
}

const FooterComponent = ({contentfulFooter: {pages, copyrightAndContact}}) => {
  const theme = useTheme()
  const classes = useStyles()
  return (
    <footer>
      <Box
        bgcolor={theme.palette.background.footer}
        className={classes.footerWrapper}
      >
        <FooterLinks pages={pages} />
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
    pages: arrayOf(object).isRequired,
  }).isRequired,
}

export default Footer
