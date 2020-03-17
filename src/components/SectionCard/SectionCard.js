import React from 'react'
import {shape, object, string} from 'prop-types'
import {Link} from 'gatsby'
import Image from 'gatsby-image'
import Typography from '@material-ui/core/Typography'
import RichText from '../RichText/RichText'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Box from '@material-ui/core/Box'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  sectionPreview: {
    color: theme.palette.primary.main,
    lineHeight: '28px',
  },
  cardContent: {
    padding: '24px',
    '&:last-child': {
      paddingBottom: '28px',
    },
  },
  previewImage: {
    width: '295px',
    height: '200px',
    margin: '28px auto 0',
    [theme.breakpoints.up('md')]: {
      width: '430px',
      height: '220px',
    },
  },
  card: {
    width: '330px',
    height: '562px',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      height: '570px',
      width: '480px',
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
    marginBottom: '28px',
    marginRight: '10px',
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
    <Card className={classes.card}>
      <Image fluid={fluid} alt={title} className={classes.previewImage} />
      <CardContent className={classes.cardContent}>
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
          <Link className={classes.link} to={`/${slug}`}>
            <Typography variant="body2">
              {linkText} <ArrowForwardIcon className={classes.arrowIcon} />
            </Typography>
          </Link>
        </Box>
      </CardContent>
    </Card>
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
