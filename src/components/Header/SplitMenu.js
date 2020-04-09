import React from 'react'
import Typography from '@material-ui/core/Typography'
import LinkHandler from '../LinkHandler'
import {makeStyles} from '@material-ui/core/styles'
import classNames from 'classnames'
import {string, arrayOf, shape} from 'prop-types'

const useStyles = makeStyles(theme => {
  const activeLink = {
    paddingBottom: '0px',
    borderBottom: `5px solid ${theme.palette.link.activeHighlightBorder}`,
    backgroundColor: theme.palette.link.activeHighlight,
  }
  return {
    link: {
      color: theme.palette.primary.menuText,
      textDecoration: 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 10px 5px',
      flexGrow: 1,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      '&:hover': {
        ...activeLink,
      },
    },
    activeLink,
  }
})

const SplitMenu = ({activeSection, items}) => {
  const classes = useStyles()
  return items.map(({name, slug}) => (
    <LinkHandler
      key={`${name}${slug}`}
      url={`/${slug}`}
      className={classNames(classes.link, {
        [classes.activeLink]: slug === activeSection,
      })}
      data-cy="navigation-link"
    >
      <Typography variant="h4">{name}</Typography>
    </LinkHandler>
  ))
}

SplitMenu.propTypes = {
  items: arrayOf(
    shape({
      name: string.isRequired,
      slug: string.isRequired,
    }),
  ).isRequired,
  activeSection: string.isRequired,
}

export default SplitMenu
