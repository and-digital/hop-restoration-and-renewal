import React from 'react'
import {string} from 'prop-types'

import {Helmet} from 'react-helmet-async'
import {useStaticQuery, graphql} from 'gatsby'

const SEO = ({title, description}) => {
  const data = useStaticQuery(graphql`
    query MetaData {
      contentfulSiteMetaData {
        title
        tags
        description
      }
    }
  `)

  const {
    contentfulSiteMetaData: {
      title: siteMetaDataTitle,
      description: siteMetaDataDescription,
      tags,
    },
  } = data

  return (
    <Helmet>
      <html lang="en" />
      <title>{title || siteMetaDataTitle}</title>
      <meta
        name="description"
        content={description || siteMetaDataDescription}
      />
      <meta name="keywords" content={tags.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

SEO.propTypes = {
  title: string,
  description: string,
}

export default SEO
