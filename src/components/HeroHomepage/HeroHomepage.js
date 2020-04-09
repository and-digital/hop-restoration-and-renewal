import React from 'react'
import {object, shape, string} from 'prop-types'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Image from 'gatsby-image'
import RichText from '../RichText'
import RichTextProvider from '../../providers/RichTextProvider'
import Quote from '../Quote'
import Hidden from '../Hidden/Hidden'

const useStyles = makeStyles(theme => ({
  heroContainer: {
    position: 'relative',
    height: 'auto',
    width: '100%',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {height: '605px'},
  },
  imageWrapper: {
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'none',
    [theme.breakpoints.up('md')]: {display: 'block '},
  },
  contextWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      textAlign: 'center',
    },
  },
  heroTextContent: {
    margin: 'auto',
    padding: '34px 32px 46px 30px',
    backgroundColor: theme.palette.background.mobileHero,
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'inline-block',
      backgroundColor: theme.palette.background.hero,
    },
    [theme.breakpoints.up('lg')]: {
      width: 'auto',
    },
  },
  heroTitle: {
    color: theme.palette.secondary.main,
    fontSize: '36px',
    lineHeight: '44px',
    marginBottom: '15px',

    [theme.breakpoints.up('md')]: {
      fontSize: '48px',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '64px',
      lineHeight: '70px',
      marginBottom: '25px',
    },
  },
  heroSubtitle: {
    color: theme.palette.primary.subtitle,
    fontSize: '28px',
    lineHeight: '1.33',

    [theme.breakpoints.up('md')]: {
      fontSize: '36px',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '48px',
      lineHeight: '1.5',
    },
  },
  heroImage: {
    height: 'auto',
    [theme.breakpoints.up('md')]: {height: '605px'},
  },
  descriptionWrapper: {
    maxWidth: '1620px',
    margin: 'auto',
    padding: '30px 20px 20px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '50px',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gridColumnGap: '40px',
    },
  },
  descriptionBackground: {
    backgroundColor: theme.palette.background.description,
  },
}))

const HeroHomepage = ({
  image: {title: heroImageTitle, fluid},
  title,
  subtitle,
  text,
  quote: {
    quoteAuthor,
    quoteDescription: {quoteDescription},
  },
}) => {
  const classes = useStyles()
  return (
    <>
      <Box component="section" className={classes.heroContainer}>
        <Box className={classes.imageWrapper}>
          <Image
            fluid={fluid}
            alt={heroImageTitle}
            className={classes.heroImage}
          />
        </Box>
        <Box maxWidth="1620" className={classes.contextWrapper}>
          <Box className={classes.heroTextContent}>
            <Typography className={classes.heroTitle} variant="h1">
              {title}
            </Typography>
            <Typography
              className={classes.heroSubtitle}
              component="h2"
              variant="subtitle1"
            >
              {subtitle}
            </Typography>
          </Box>
        </Box>
      </Box>
      <div className={classes.descriptionBackground}>
        <div className={classes.descriptionWrapper}>
          <div>
            <RichTextProvider bodyType="h2">
              <RichText text={text} />
            </RichTextProvider>
          </div>
          <Hidden mdDown>
            <Quote quoteText={quoteDescription} quoteAuthor={quoteAuthor} />
          </Hidden>
        </div>
      </div>
    </>
  )
}

HeroHomepage.propTypes = {
  image: shape({
    title: string.isRequired,
    fluid: object.isRequired,
  }).isRequired,
  title: string.isRequired,
  subtitle: string,
  text: shape({
    json: object.isRequired,
  }).isRequired,
  quote: shape({
    quoteAuthor: string,
    quoteDescription: shape({quoteDescription: string.isRequired}).isRequired,
  }),
}

export default HeroHomepage
