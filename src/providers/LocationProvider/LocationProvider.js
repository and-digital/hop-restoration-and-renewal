import React from 'react'
import {node, string} from 'prop-types'

import LocationContext from './LocationContext'

const {Provider} = LocationContext

const LocationProvider = ({section, article, subArticle, children}) => (
  <Provider
    value={{
      section,
      article,
      subArticle,
    }}
  >
    {children}
  </Provider>
)

LocationProvider.propTypes = {
  children: node.isRequired,
  section: string,
  article: string,
  subArticle: string,
}

LocationProvider.defaultProps = {
  section: '',
  article: '',
  subArticle: '',
}

export default LocationProvider
