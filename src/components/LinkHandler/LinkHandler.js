import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

const LinkHandler = ({url, newTab, children, activeclassname, ...props}) => {
  if (/^\/(?!\/)/.test(url)) {
    return (
      <Link
        to={url}
        {...props}
        activeClassName={activeclassname ? activeclassname : null}
      >
        {children}
      </Link>
    )
  }
  return newTab ? (
    <a href={url} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  ) : (
    <a href={url} {...props}>
      {children}
    </a>
  )
}

LinkHandler.propTypes = {
  url: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  activeclassname: PropTypes.string,
  children: PropTypes.node,
}

LinkHandler.defaultProps = {
  children: null,
  newTab: false,
}

export default LinkHandler
