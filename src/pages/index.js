import React from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'
import {arrayOf, object, shape, string, number} from 'prop-types'
import Box from '@material-ui/core/Box'
import Hero from '../components/Hero'
import SectionCard from '../components/SectionCard'

const title = 'Restoration and Renewal'

const Index = ({
  data: {
    contentfulTemplateHeroWithCards: {hero, cards},
  },
}) => (
  <Layout title={title}>
    <Hero {...hero} />
    <Box
      mx="auto"
      my={5}
      data-testid="sections"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      width="100%"
      maxWidth="1620px"
    >
      {cards.map(({slug, previewLinkName, hero: {image}}) => (
        <Box
          key={`${title}-${slug}`}
          position="relative"
          width={{
            xs: '100%',
          }}
        >
          <SectionCard image={image} slug={slug} linkText={previewLinkName} />
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
          fixed: shape({
            height: number,
          }),
        }).isRequired,
        title: string.isRequired,
        text: shape({
          json: object.isRequired,
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
        title
        text {
          json
        }
        image {
          title
          fixed(height: 605) {
            ...GatsbyContentfulFixed_withWebp
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
