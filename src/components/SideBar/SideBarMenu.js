import React from 'react'
import classNames from 'classnames'

import Typography from '@material-ui/core/Typography'
import LinkHandler from '../LinkHandler'
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
  subList: {
    listStyleType: 'none',
    padding: '25px 25px 0px 16px',
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

const SideBarMenu = ({articleList}) => {
  const classes = useStyles()
  const location = useLocation()
  const {article, subArticle} = location

  return (
    <Box className={classes.wrapper}>
      <ul className={classes.list}>
        {articleList.map(
          ({title, slug: articleSlug, sectionSlug, subArticleList}) => (
            <li key={articleSlug} className={classes.listItem}>
              <LinkHandler
                url={`/${sectionSlug}/${articleSlug}`}
                className={classNames(classes.link, {
                  [classes.activeLink]: articleSlug === article,
                })}
              >
                <Typography className={classes.linkText}>{title}</Typography>
              </LinkHandler>
              {!!subArticleList.length && (
                <ul className={classes.subList}>
                  {subArticleList.map(({shortTitle, slug}) => (
                    <li key={slug} className={classes.listItem}>
                      <LinkHandler
                        url={`/${sectionSlug}/${articleSlug}/${slug}`}
                        className={classNames(classes.link, {
                          [classes.activeLink]: slug === subArticle,
                        })}
                      >
                        <Typography className={classes.linkText}>
                          {shortTitle}
                        </Typography>
                      </LinkHandler>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ),
        )}
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
