import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {arrayOf, object, shape} from 'prop-types'
import RichText from '../RichText'
import RichTextProvider from '../../providers/RichTextProvider'
import FooterLinks from './FooterLinks'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footerWrapper: {
    backgroundColor: theme.palette.background.footer,
    padding: '27px 63px 13px 29px',
    minHeight: '418px',
    [theme.breakpoints.up('sm')]: {
      minHeight: '220px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '27px 23px 28px 29px',
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
  const classes = useStyles()
  return (
    <footer className={classes.footerWrapper}>
      <Box maxWidth={1620} margin="auto">
        <FooterLinks pages={pages} />
        <RichTextProvider>
          <RichText
            text={copyrightAndContact}
            className={classes.copyrightText}
          />
        </RichTextProvider>
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
