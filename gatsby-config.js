// eslint-disable-next-line no-undef
require('dotenv').config({
  path: `.env`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

const {spaceId, accessToken} = contentfulConfig

console.log(accessToken)

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
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
