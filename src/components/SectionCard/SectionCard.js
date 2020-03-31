import React from 'react'
import {shape, object, string} from 'prop-types'
import LinkHandler from '../LinkHandler'
import Image from 'gatsby-image'
import Typography from '@material-ui/core/Typography'
import RichText from '../RichText/RichText'
import Box from '@material-ui/core/Box'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  sectionPreview: {
    color: theme.palette.primary.main,
    '& p': {
      lineHeight: '22px',
      [theme.breakpoints.up('md')]: {
        lineHeight: '28px',
      },
    },
  },
  cardContent: {
    marginTop: '24px',
    marginBottom: '24px',
    height: 294,
    position: 'relative',
  },
  previewImage: {
    height: '200px',
    [theme.breakpoints.up('md')]: {
      height: '220px',
    },
  },
  card: {
    height: '562px',
    padding: '20px',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      height: '570px',
      '& h2': {
        fontSize: '24px',
        lineHeight: '36px',
        marginBottom: '9px',
      },
    },
  },
  arrowIcon: {
    verticalAlign: 'middle',
    color: theme.palette.link.arrow,
    marginLeft: '8px',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.link.main,
  },
  linkWrapper: {
    position: 'absolute',
    bottom: 0,
  },
  previewWrapper: {
    maxHeight: '110px',
    overflow: 'hidden',
  },
}))

const SectionCard = ({
  image: {fluid, title},
  sectionTitle,
  body,
  linkText,
  slug,
}) => {
  const classes = useStyles()

  return (
    <Box>
      <Paper className={classes.card}>
        <Image fluid={fluid} alt={title} className={classes.previewImage} />
        <Box className={classes.cardContent}>
          <Box mb={1}>
            <Typography variant="h2">{sectionTitle}</Typography>
          </Box>
          <Box mb={1} className={classes.previewWrapper}>
            <RichText
              className={classes.sectionPreview}
              text={body}
              aria-label="section description"
            />
          </Box>
          <Box className={classes.linkWrapper}>
            <LinkHandler className={classes.link} url={`/${slug}`}>
              <Typography variant="body2">
                {linkText} <ArrowForwardIcon className={classes.arrowIcon} />
              </Typography>
            </LinkHandler>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

SectionCard.propTypes = {
  image: shape({
    title: string.isRequired,
    fluid: object.isRequired,
  }).isRequired,
  body: shape({
    json: object.isRequired,
  }).isRequired,
  slug: string.isRequired,
  linkText: string.isRequired,
  sectionTitle: string.isRequired,
}

export default SectionCard
