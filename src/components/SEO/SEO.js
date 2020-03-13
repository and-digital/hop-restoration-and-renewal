import React from 'react'
import {string} from 'prop-types'

import {Helmet, HelmetProvider} from 'react-helmet-async'

const SEO = ({title}) => (
  <HelmetProvider>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta
        name="description"
        content="The Palace of Westminster is one of the most iconic and significant buildings in the world, and home to one of the busiest parliaments, with more than a million visitors."
      />
      <meta
        name="keywords"
        content="Restoration and Renewal, Parliament, R&R, Parliament Restoration"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  </HelmetProvider>
)

SEO.propTypes = {
  title: string.isRequired,
}

export default SEO
