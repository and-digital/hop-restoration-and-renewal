import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import {makeStyles} from '@material-ui/core/styles'
import generateClassNames from 'classnames'

const useStyles = makeStyles(theme => {
  const activeHoverStyle = {
    textDecoration: 'none',
  }
  return {
    link: {
      color: theme.palette.link.main,
      textDecoration: 'underline',
      '&:active': {
        ...activeHoverStyle,
      },
      '&:hover': {
        ...activeHoverStyle,
      },
    },
  }
})

const LinkHandler = ({url, newTab, className, children, ...props}) => {
  const classes = useStyles()
  const classNames = generateClassNames(classes.link, {
    [className]: !!className,
  })
  console.log(classNames)
  if (/^\/(?!\/)/.test(url)) {
    return (
      <Link to={url} className={classNames} {...props}>
        {children}
      </Link>
    )
  }
  return newTab ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames}
      {...props}
    >
      {children}
    </a>
  ) : (
    <a href={url} className={classNames} {...props}>
      {children}
    </a>
  )
}

LinkHandler.propTypes = {
  url: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
}

LinkHandler.defaultProps = {
  newTab: false,
  className: null,
  children: null,
}

export default LinkHandler
