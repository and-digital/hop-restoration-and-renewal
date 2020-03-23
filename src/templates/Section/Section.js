import React from 'react'
import {shape, string, arrayOf, object} from 'prop-types'
import {graphql} from 'gatsby'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Layout from '../../components/Layout'
import ArticleCard from '../../components/ArticleCard'
import Hero from '../../components/Hero'

const Section = ({
  data: {
    contentfulSection: {title, slug, hero, articles},
  },
}) => {
  return (
    <Layout title={title}>
      <Hero {...hero} />
      <Box
        my={5}
        mx="auto"
        data-testid="articles"
        maxWidth={1620}
        padding="20px"
      >
        <Grid container spacing={5} data-testid="articleGrid">
          {articles.map(
            ({
              title: articleTitle,
              previewText,
              previewLinkText,
              slug: articleSlug,
            }) => (
              <Grid item key={`${title}-${slug}`} xs={12} sm={6} md={6} lg={4}>
                <ArticleCard
                  title={articleTitle}
                  sectionSlug={slug}
                  slug={articleSlug}
                  linkText={previewLinkText}
                  previewText={previewText}
                />
              </Grid>
            ),
          )}
        </Grid>
      </Box>
    </Layout>
  )
}

Section.propTypes = {
  data: shape({
    contentfulSection: shape({
      title: string.isRequired,
      slug: string.isRequired,
      hero: shape({
        image: shape({
          title: string.isRequired,
          fixed: object.isRequired,
        }).isRequired,
      }).isRequired,
      articles: arrayOf(
        shape({
          previewText: object.isRequired,
          previewLinkText: string.isRequired,
          slug: string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export default Section

export const query = graphql`
  query SectionQuery($slug: String!) {
    contentfulSection(slug: {eq: $slug}) {
      title
      slug
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
      articles {
        title
        slug
        previewLinkText
        previewText {
          children {
            id
          }
          json
        }
      }
    }
  }
`
