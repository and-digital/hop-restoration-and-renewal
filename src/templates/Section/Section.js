import React from 'react'
import {shape, string, arrayOf, object} from 'prop-types'
import {graphql} from 'gatsby'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Layout from '../../components/Layout'
import ArticleCard from '../../components/ArticleCard'
import Hero from '../../components/Hero'
import PageIntro from '../../components/PageIntro'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'

const Section = ({
  data: {
    contentfulSection: {
      title,
      slug,
      hero: {image, title: heroTitle, text},
      articles,
    },
  },
}) => (
  <Layout title={title} section={slug}>
    <Hero image={image} />
    <Box my={3} mx="auto" data-testid="articles" maxWidth={1620} padding="20px">
      <Grid container spacing={5} data-testid="articleGrid">
        <Grid item xs={12}>
          <Breadcrumbs breadcrumbs={[]} />
        </Grid>
        <Grid item xs={12} lg={9}>
          <PageIntro title={heroTitle} text={text} />
        </Grid>
        {articles.map(
          ({
            title: articleTitle,
            previewText,
            previewLinkText,
            slug: articleSlug,
          }) => (
            <Grid
              item
              key={`${articleTitle}-${slug}`}
              xs={12}
              sm={6}
              md={6}
              lg={4}
            >
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

Section.propTypes = {
  data: shape({
    contentfulSection: shape({
      title: string.isRequired,
      slug: string.isRequired,
      hero: shape({
        image: shape({
          title: string.isRequired,
          fluid: object.isRequired,
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
        image {
          title
          fluid(maxWidth: 1920) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        title
        text {
          json
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
