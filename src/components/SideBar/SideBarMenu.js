import React from 'react'
import Typography from '@material-ui/core/Typography'
import {Link} from 'gatsby'
import {arrayOf, shape, string} from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: theme.palette.background.sideBar,
  },
  link: {
    color: theme.palette.primary.text,
    textDecoration: 'none',
    display: 'inline-flex',
    flexDirection: 'column',
  },
  linkText: {
    borderBottom: `4px solid ${theme.palette.primary.menuText}`,
  },
  list: {
    listStyleType: 'none',
    padding: '25px 25px 25px 16px',
  },
  listItem: {
    paddingBottom: '50px',
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  activeLink: {
    borderBottom: 'none',
    '& .selected': {
      backgroundColor: theme.palette.primary.menuText,
    },
    '& .active': {
      borderBottom: 'none',
    },
  },
}))

const Menu = ({articleList}) => {
  const classes = useStyles()
  return (
    <Box className={classes.wrapper}>
      <ul className={classes.list}>
        {articleList.map(({title, slug}) => (
          <li key={slug} className={classes.listItem}>
            <Link
              to={`/${slug}`}
              className={classes.link}
              activeClassName={classes.activeLink}
              data-testid={`sideBar-link-${title}`}
            >
              <Typography className={classes.linkText}>{title}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  )
}

Menu.propTypes = {
  articleList: arrayOf(
    shape({
      slug: string.isRequired,
    }),
  ).isRequired,
}

export default Menu
