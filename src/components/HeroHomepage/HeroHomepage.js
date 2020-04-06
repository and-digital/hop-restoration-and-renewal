import React from 'react'
import {object, shape, string} from 'prop-types'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Image from 'gatsby-image'
import RichText from '../RichText'
import RichTextProvider from '../../providers/RichTextProvider'
import Quote from '../../components/Quote'

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
    [theme.breakpoints.up('md')]: {
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
  },
  heroImage: {
    height: 'auto',
    [theme.breakpoints.up('md')]: {height: '605px'},
  },
  descriptionWrapper: {
    padding: '30px 20px 40px',
    backgroundColor: theme.palette.background.description,
    [theme.breakpoints.up('md')]: {
      padding: '50px 70px 30px',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  homePageDescription: {
    margin: 'auto',
    maxWidth: '1000px',
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
      <Box className={classes.descriptionWrapper}>
        <Box padding="20px">
          <RichTextProvider bodyType="body2">
            <RichText text={text} className={classes.homePageDescription} />
          </RichTextProvider>
        </Box>
        <Box
          display={{xs: 'none', lg: 'block'}}
          maxWidth="450px"
          padding="20px"
        >
          <Quote
            quoteDescription={quoteDescription}
            quoteAuthor={quoteAuthor}
          />
        </Box>
      </Box>
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
