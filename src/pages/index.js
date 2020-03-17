import React from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'
import {shape, object, arrayOf, string} from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
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
    <Typography variant="h1">{title}</Typography>
    <Box my={5} mx="auto" data-testid="sections" maxWidth={1620}>
      <Grid container justify="left" spacing={10}>
        {cards.map(
          ({
            slug,
            title: sectionTitle,
            previewLinkName,
            hero: {image},
            childContentfulSectionPreviewContentRichTextNode,
          }) => (
            <Grid item key={`${title}-${slug}`} xs="auto">
              <SectionCard
                image={image}
                sectionTitle={sectionTitle}
                slug={slug}
                linkText={previewLinkName}
                body={childContentfulSectionPreviewContentRichTextNode}
              />
            </Grid>
          ),
        )}
      </Grid>
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
        title
        slug
        previewLinkName
        childContentfulSectionPreviewContentRichTextNode {
          json
        }
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
