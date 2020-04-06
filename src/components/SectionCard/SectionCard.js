import React from 'react'
import {shape, object, string} from 'prop-types'
import LinkHandler from '../LinkHandler'
import Image from 'gatsby-image'
import Typography from '@material-ui/core/Typography'
import RichText from '../RichText/RichText'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import {makeStyles, useTheme} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card: {
    height: '600px',
    borderTop: `5px solid ${theme.palette.link.arrow}`,
    [theme.breakpoints.up('sm')]: {
      height: '360px',
    },
  },
  sectionImage: {
    height: '160px',
    [theme.breakpoints.up('sm')]: {
      height: '360px',
    },
  },
  sectionContentWrapper: {
    height: '404px',
    [theme.breakpoints.up('sm')]: {
      height: '324px',
    },
  },
  sectionTitle: {
    fontSize: '28px',
  },
  sectionTextWrapper: {
    maxHeight: '330px',
    [theme.breakpoints.up('sm')]: {
      maxHeight: '280px',
    },
  },
  sectionText: {
    '& p': {
      lineHeight: '32px',
    },
  },
  arrowIcon: {
    verticalAlign: 'middle',
    color: theme.palette.link.arrow,
    marginLeft: '8px',
  },
  link: {
    fontWeight: 'bold',
    color: theme.palette.link.main,
  },
}))

const SectionCard = ({
  image: {fluid, title},
  sectionTitle,
  body,
  linkText,
  cardBackground,
  slug,
}) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Box
      className={classes.card}
      bgcolor={theme.palette.colours[cardBackground]}
      position="relative"
    >
      <Grid container direction="row">
        <Grid item xs={12} sm={4}>
          <Image fluid={fluid} alt={title} className={classes.sectionImage} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box
            margin="18px"
            position="relative"
            className={classes.sectionContentWrapper}
          >
            <Box mb={1}>
              <Typography variant="h3" className={classes.sectionTitle}>
                {sectionTitle}
              </Typography>
            </Box>
            <Box
              mb={1}
              overflow="hidden"
              className={classes.sectionTextWrapper}
            >
              <RichText
                className={classes.sectionText}
                text={body}
                aria-label="section description"
              />
            </Box>
            <Box position="absolute" bottom="0">
              <LinkHandler className={classes.link} url={`/${slug}`}>
                <Typography variant="body1">
                  {linkText} <ArrowForwardIcon className={classes.arrowIcon} />
                </Typography>
              </LinkHandler>
            </Box>
          </Box>
        </Grid>
      </Grid>
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
  cardBackground: string.isRequired,
  sectionTitle: string.isRequired,
}

export default SectionCard
