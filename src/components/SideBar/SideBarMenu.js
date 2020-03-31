import React from 'react'
import classNames from 'classnames'

import Typography from '@material-ui/core/Typography'
import {Link} from 'gatsby'
import {arrayOf, shape, string} from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import useLocation from '../../hooks/useLocation'

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: theme.palette.background.sideBar,
    width: '100%',
    marginLeft: '15px',
  },
  link: {
    color: theme.palette.primary.text,
    textDecoration: 'none',
    display: 'inline-flex',
    flexDirection: 'column',
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
    borderLeft: `4px solid ${theme.palette.primary.menuText}`,
    paddingLeft: '15px',
    borderBottom: 'none',
    '& .selected': {
      backgroundColor: theme.palette.primary.menuText,
    },
  },
}))

const SideBarMenu = ({articleList, subarticleList}) => {
  const classes = useStyles()
  const {article} = useLocation()

  return (
    <Box className={classes.wrapper}>
      <ul className={classes.list}>
        {articleList.map(({title, slug: test}) => (
          <li key={test} className={classes.listItem}>
            <Link
              to={`/${test}`}
              className={classNames(classes.link, {
                [classes.activeLink]: test === article,
              })}
              activeClassName={classes.activeLink}
            >
              <Typography className={classes.linkText}>{title}</Typography>
            </Link>
            <ul>
              {subarticleList &&
                subarticleList.map(({title, slug, articleSlug}) =>
                  articleSlug === test ? (
                    <li key={slug}>
                      <Link
                        to={`/${slug}`}
                        className={classNames(classes.link, {
                          [classes.activeLink]: slug === article,
                        })}
                        activeClassName={classes.activeLink}
                      >
                        <Typography className={classes.linkText}>
                          {title}
                        </Typography>
                      </Link>
                    </li>
                  ) : (
                    <> </>
                  ),
                )}
            </ul>
          </li>
        ))}
      </ul>
    </Box>
  )
}

SideBarMenu.propTypes = {
  articleList: arrayOf(
    shape({
      slug: string.isRequired,
    }),
  ).isRequired,
}

export default SideBarMenu
