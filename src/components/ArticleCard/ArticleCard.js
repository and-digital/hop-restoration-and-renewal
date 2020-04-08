import React from 'react'
import {string, object, shape} from 'prop-types'
import LinkHandler from '../LinkHandler'
import Typography from '@material-ui/core/Typography'
import RichText from '../RichText/RichText'
import RichTextProvider from '../../providers/RichTextProvider'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  articlePreview: {
    color: theme.palette.primary.main,
    '& p': {
      lineHeight: '22px',
      [theme.breakpoints.up('md')]: {
        lineHeight: '28px',
      },
    },
  },
  cardContent: {
    position: 'relative',
    height: '100%',
  },
  card: {
    height: '427px',
    position: 'relative',
    borderLeft: '7px solid purple',
    borderRadius: '0px',
    boxShadow: '0px -4px 4px #ECECEC',
    padding: '28px',
    [theme.breakpoints.up('md')]: {
      height: '340px',
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

const ArticleCard = ({title, previewText, linkText, slug, sectionSlug}) => {
  const classes = useStyles()
  return (
    <Box>
      <Paper className={classes.card}>
        <Box className={classes.cardContent}>
          <Box mb={1}>
            <Typography variant="h2">{title}</Typography>
          </Box>
          <Box mb={1} className={classes.previewWrapper}>
            <RichTextProvider>
              <RichText
                className={classes.articlePreview}
                text={previewText}
                aria-label="article description"
              />
            </RichTextProvider>
          </Box>
          <Box className={classes.linkWrapper}>
            <LinkHandler
              url={`/${sectionSlug}/${slug}`}
              className={classes.link}
            >
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

ArticleCard.propTypes = {
  previewText: shape({
    json: object.isRequired,
  }).isRequired,
  sectionSlug: string.isRequired,
  slug: string.isRequired,
  linkText: string.isRequired,
  title: string.isRequired,
}

export default ArticleCard
