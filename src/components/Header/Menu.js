import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import {Link} from 'gatsby'
import {arrayOf, shape, string} from 'prop-types'

const Menu = ({sections}) => (
  <Box display="flex" flexDirection="row" alignItems="center">
    <Grid container spacing={3}>
      {sections.map(({name, slug}) => (
        <Grid item key={name} xs={12} sm="auto">
          <Link to={`/${slug}`}>{name}</Link>
        </Grid>
      ))}
    </Grid>
  </Box>
)

Menu.propTypes = {
  sections: arrayOf(
    shape({
      name: string.isRequired,
      slug: string.isRequired,
    }),
  ).isRequired,
}

export default Menu
