import React from 'react'
import {string, shape} from 'prop-types'
import {Link} from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: theme.palette.background.sideBar,
    maxWidth: '350px',
  },
  link: {
    color: theme.palette.primary.text,
    textDecoration: 'none',
    display: 'inline-flex',
    flexDirection: 'row',
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

const SideBar = ({articleList}) => {
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
              <Box className="selected" width="5px" height="30px" mr={2} />
              <Box className={`${classes.linkText} active`}>
                <Typography>{title}</Typography>
              </Box>
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  )
}

SideBar.propTypes = {
  articleList: shape({
    slug: string,
    title: string,
  }).isRequired,
}

export default SideBar
