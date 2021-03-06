import React from 'react'
import {shape, string, arrayOf} from 'prop-types'
import Grid from '@material-ui/core/Grid'
import LinkHandler from '../LinkHandler'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  linkWrapper: {
    marginBottom: '52px',
    [theme.breakpoints.up('sm')]: {marginBottom: '0px'},
  },
  footerMenuLink: {
    color: theme.palette.link.main,
    lineHeight: '40px',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'block',
    '& p': {
      lineHeight: '30px',
      display: 'inline-block',
      borderBottom: '3px solid',
    },
  },
}))

const FooterLinks = ({pages}) => {
  const classes = useStyles()
  return (
    <Grid container spacing={3} direction="row" className={classes.linkWrapper}>
      {pages.map(({name, slug}) => (
        <Grid item key={name} xs={12} sm="auto">
          <LinkHandler
            url={`/${slug}`}
            data-testid={`footer-link-${name}`}
            data-cy="footer-link"
            className={classes.footerMenuLink}
          >
            <Typography variant="body1">{name}</Typography>
          </LinkHandler>
        </Grid>
      ))}
    </Grid>
  )
}

FooterLinks.propTypes = {
  pages: arrayOf(
    shape({
      name: string.isRequired,
      slug: string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default FooterLinks
