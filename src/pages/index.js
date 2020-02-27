import React from 'react'
import get from 'lodash/get'
import Helmet from "react-helmet"

class RootIndex extends React.Component {
  render () {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
          </div>
        </div>
    )
  }
}

export default RootIndex