import React from 'react'
import {node, string} from 'prop-types'

import LocationContext from './LocationContext'

const {Provider} = LocationContext

const LocationProvider = ({section, article, childArticle, children}) => (
  <Provider
    value={{
      section,
      article,
      childArticle,
    }}
  >
    {children}
  </Provider>
)

LocationProvider.propTypes = {
  children: node.isRequired,
  section: string,
  article: string,
  childArticle: string,
}

LocationProvider.defaultProps = {
  section: '',
  article: '',
  childArticle: '',
}

export default LocationProvider
