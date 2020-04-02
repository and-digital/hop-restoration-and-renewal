import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import LinkHandler from '../LinkHandler'
import useLocation from '../../hooks/useLocation'
import {makeStyles} from '@material-ui/core/styles'
import classNames from 'classnames'
import {object, arrayOf, shape, string} from 'prop-types'
import Image from 'gatsby-image'

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.primary.menuText,
    textDecoration: 'none',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    padding: '0 10px 5px',
    'flex-grow': 1,
    'text-align': 'center',
    'white-space': 'nowrap',
  },
  activeLink: {
    'padding-bottom': '0px',
    borderBottom: `5px solid ${theme.palette.link.activeHighlightBorder}`,
    backgroundColor: theme.palette.link.activeHighlight,
  },
  linkBox: {
    padding: '45px 10px',
    width: '100% !important',
    maxWidth: '460px',
  },
  logo: {
    maxWidth: '460px',
  },
}))

const splitArrayInHalf = array => {
  const halfWayIndex = array.length / 2
  return [array.slice(0, halfWayIndex), array.slice(halfWayIndex)]
}

const DesktopMenu = ({sections, logo: {fluid, title}, homePageLinkText}) => {
  const [leftMenuItems, rightMenuItems] = splitArrayInHalf(sections)
  const classes = useStyles()
  const {section} = useLocation()

  const displayMenuItems = ({name, slug}) => (
    <LinkHandler
      url={`/${slug}`}
      className={classNames(classes.link, {
        [classes.activeLink]: slug === section,
      })}
      data-cy="navigation-link"
    >
      <Typography variant="h3">{name}</Typography>
    </LinkHandler>
  )

  displayMenuItems.propTypes = {
    name: string.isRequired,
    slug: string.isRequired,
  }

  return (
    <Box
      display="flex"
      width="100%"
      maxWidth={1620}
      margin="auto"
      alignItems="stretch"
    >
      {leftMenuItems.map(displayMenuItems)}
      <LinkHandler
        url="/"
        className={classes.linkBox}
        aria-label={homePageLinkText}
      >
        <Image
          imgStyle={{objectFit: 'contain'}}
          fluid={fluid}
          alt={title}
          className={classes.logo}
        />
      </LinkHandler>
      {rightMenuItems.map(displayMenuItems)}
    </Box>
  )
}

DesktopMenu.propTypes = {
  sections: arrayOf(
    shape({
      name: string.isRequired,
      slug: string.isRequired,
    }),
  ).isRequired,
  logo: shape({fluid: object.isRequired, title: string.isRequired}).isRequired,
  homePageLinkText: string.isRequired,
}

export default DesktopMenu
