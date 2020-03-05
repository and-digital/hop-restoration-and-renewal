import React from 'react'
import {useStaticQuery, Link, graphql} from 'gatsby'
import Image from 'gatsby-image'
import {shape, string, object, arrayOf} from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

const styles = makeStyles({
  root: {
    backgroundColor: '#ffffff',
    boxShadow: '0px 5px 5px rgba(35, 35, 35, 0.1)',
  },
})

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      contentfulHeader(name: {eq: "main"}) {
        sections {
          name
          slug
        }
        logo {
          fixed {
            ...GatsbyContentfulFixed_withWebp
          }
          title
        }
      }
    }
  `)
  return <HeaderComponent {...data} />
}

const HeaderComponent = ({
  contentfulHeader: {
    sections,
    logo: {fixed, title},
  },
}) => {
  const classes = styles()
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          maxWidth={1560}
          margin="auto"
        >
          <Image fixed={fixed} alt={title} />
          <Box display="flex" flexDirection="row" alignItems="center">
            <Grid container spacing={3}>
              {sections.map(({name, slug}) => (
                <Grid item key={name}>
                  <Link to={`/${slug}`}>{name}</Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

HeaderComponent.propTypes = {
  contentfulHeader: shape({
    sections: arrayOf(shape({name: string.isRequired, slug: string.isRequired}))
      .isRequired,
    logo: shape({fixed: object.isRequired, title: string.isRequired})
      .isRequired,
  }).isRequired,
}

export default Header
