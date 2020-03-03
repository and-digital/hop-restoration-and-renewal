import React from 'react'
import {Helmet} from 'react-helmet'
import {string, node} from 'prop-types'

const Layout = ({title, children}) => (
  <>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
    </Helmet>
    {children}
  </>
)

Layout.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
}

export default Layout
