import React from 'react'
import Box from '@material-ui/core/Box'
import LinkHandler from '../LinkHandler'
import useLocation from '../../hooks/useLocation'
import {makeStyles} from '@material-ui/core/styles'
import {object, arrayOf, shape, string} from 'prop-types'
import Image from 'gatsby-image'
import SplitMenu from './SplitMenu'

const useStyles = makeStyles(() => ({
  linkBox: {
    padding: '45px 20px',
    width: '100%',
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
  return (
    <Box display="flex" maxWidth={1620} margin="auto">
      <SplitMenu items={leftMenuItems} activeSection={section} />
      <LinkHandler
        url="/"
        className={classes.linkBox}
        aria-label={homePageLinkText}
      >
        <Image fluid={fluid} alt={title} />
      </LinkHandler>
      <SplitMenu items={rightMenuItems} activeSection={section} />
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
