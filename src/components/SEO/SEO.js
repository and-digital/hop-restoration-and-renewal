import React from 'react'
import {string} from 'prop-types'

import {Helmet, HelmetProvider} from 'react-helmet-async'
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
      title: seoTitle,
      description: seoDescription,
      tags,
    },
  } = data

  return (
    <HelmetProvider>
      <Helmet>
        <html lang="en" />
        <title>{title || seoTitle}</title>
        <meta name="description" content={description || seoDescription} />
        <meta name="keywords" content={tags.join(', ')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
    </HelmetProvider>
  )
}

SEO.propTypes = {
  title: string,
  description: string,
}

export default SEO
