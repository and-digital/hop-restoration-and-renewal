import React, {useState} from 'react'
import {node, string} from 'prop-types'

import LocationContext from './LocationContext'

const {Provider} = LocationContext

const LocationProvider = ({
  section: defaultSection,
  article: defaultArticle,
  childArticle: defaultChildArticle,
  children,
}) => {
  const [location, setLocation] = useState({
    section: defaultSection,
    article: defaultArticle,
    childArticle: defaultChildArticle,
  })

  const {section, article, childArticle} = location

  return (
    <Provider
      value={{
        section,
        article,
        childArticle,
        setLocation,
      }}
    >
      {children}
    </Provider>
  )
}

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
