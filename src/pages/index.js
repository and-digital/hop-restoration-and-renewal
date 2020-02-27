import React from 'react'
import get from 'lodash/get'

class RootIndex extends React.Component {
  render () {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

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