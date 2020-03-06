import React from 'react'
import Layout from '../components/Layout'
import {graphql, Link} from 'gatsby'
import Image from 'gatsby-image'
import {shape, object, arrayOf, string} from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const title = 'Restoration and Renewal'

const Index = ({
  data: {
    contentfulTemplateHeroWithCards: {
      hero: {
        image: {title: heroImageTitle, fluid},
      },
      cards,
    },
  },
}) => (
  <Layout title={title}>
    <Image fluid={fluid} alt={heroImageTitle} />
    <Typography variant="h1">{title}</Typography>
    <Box
      my={5}
      data-testid="sections"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      width="100%"
    >
      {cards.map(({slug, previewLinkName, hero: {image: {title, fluid}}}) => (
        <Box
          key={`${title}-${slug}`}
          position="relative"
          width={{
            xs: '100%',
          }}
        >
          <Image fluid={fluid} alt={title} />
          <Link to={slug}>
            <Typography>{previewLinkName}</Typography>
          </Link>
        </Box>
      ))}
    </Box>
  </Layout>
)

export default Index

Index.propTypes = {
  data: shape({
    contentfulTemplateHeroWithCards: shape({
      hero: shape({
        image: shape({
          title: string.isRequired,
          fluid: object.isRequired,
        }).isRequired,
      }).isRequired,
      cards: arrayOf(
        shape({
          slug: string.isRequired,
          previewLinkName: string.isRequired,
          hero: shape({
            image: shape({
              title: string.isRequired,
              fluid: object.isRequired,
            }).isRequired,
          }).isRequired,
        }),
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export const query = graphql`
  query HomePageQuery {
    contentfulTemplateHeroWithCards(name: {eq: "homePage"}) {
      hero {
        image {
          title
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      cards {
        slug
        previewLinkName
        hero {
          image {
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
