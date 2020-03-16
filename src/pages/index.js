import React from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'
import {shape, object, arrayOf, string, number} from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Hero from '../components/Hero'
import SectionCard from '../components/SectionCard'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme} from '@material-ui/core/styles'

const title = 'Restoration and Renewal'

const Index = ({
  data: {
    contentfulTemplateHeroWithCards: {hero, cards},
  },
}) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const justify = isDesktop ? 'flex-start' : 'center'

  return (
    <Layout title={title}>
      <Hero {...hero} />
      <Typography variant="h1">{title}</Typography>
      <Box my={5} mx="auto" data-testid="sections" maxWidth={1620}>
        <Grid
          container
          justify={justify}
          spacing={10}
          data-testid="sectionsGrid"
        >
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
}

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
