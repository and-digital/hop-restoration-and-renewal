import React from 'react'
import {node, string} from 'prop-types'

import RichTextContext from './RichTextContext'

const {Provider} = RichTextContext

const RichTextProvider = ({bodyType, children}) => (
  <Provider value={{bodyType}}>{children}</Provider>
)

RichTextProvider.propTypes = {
  bodyType: string,
  children: node.isRequired,
}

RichTextProvider.defaultProps = {
  bodyType: 'body1',
}

export default RichTextProvider
