// eslint-disable-next-line no-undef
require('dotenv').config({
  path: `.env`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
}

const {spaceId, accessToken} = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.',
  )
}

// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful starter',
  },
  pathPrefix: '/hop-restoration-and-renewal',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-sharp',
    `gatsby-plugin-material-ui`,
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
