import React from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'
import {shape, object, arrayOf, string, number} from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import HeroHomepage from '../components/HeroHomepage'
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
      <HeroHomepage {...hero} />
      <Box
        data-testid="sections"
        maxWidth={1620}
        my={5}
        mx="auto"
        padding="20px"
      >
        <Grid
          container
          justify={justify}
          spacing={5}
          data-testid="sectionsGrid"
        >
          {cards.map(
            ({
              slug,
              title: sectionTitle,
              previewLinkName,
              theme: {cardBackground},
              hero: {image},
              childContentfulSectionPreviewContentRichTextNode,
            }) => (
              <Grid item key={`${title}-${slug}`} xs={12} lg={6}>
                <SectionCard
                  image={image}
                  sectionTitle={sectionTitle}
                  slug={slug}
                  linkText={previewLinkName}
                  background={cardBackground}
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
          fluid: shape({
            height: number,
          }),
        }).isRequired,
        title: string.isRequired,
        subtitle: string,
      }).isRequired,
      cards: arrayOf(
        shape({
          slug: string.isRequired,
          previewLinkName: string.isRequired,
          theme: shape({
            cardBackground: string.isRequired,
          }).isRequired,
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
        subtitle
        quote {
          quoteAuthor
          quoteDescription {
            quoteDescription
          }
        }
        image {
          title
          fluid(maxWidth: 1920) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        text {
          json
        }
      }
      cards {
        title
        slug
        previewLinkName
        childContentfulSectionPreviewContentRichTextNode {
          json
        }
        theme {
          cardBackground
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
