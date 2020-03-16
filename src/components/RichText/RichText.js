import React from 'react'
import PropTypes from 'prop-types'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {INLINES, BLOCKS} from '@contentful/rich-text-types'
import ExternalLink from './ExternalLink'
import Paragraph from './Paragraph'
import EmbeddedComponent from './EmbeddedEntry'

const RichText = ({className, text}) => {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: ExternalLink,
      [BLOCKS.PARAGRAPH]: Paragraph,
      [BLOCKS.EMBEDDED_ENTRY]: EmbeddedComponent,
    },
  }
  return (
    <div className={`rich-text ${className}`}>
      {documentToReactComponents(text.json, options)}
    </div>
  )
}
RichText.propTypes = {
  data: PropTypes.shape({
    uri: PropTypes.string,
  }),
  className: PropTypes.string,
  text: PropTypes.shape({
    json: PropTypes.object,
  }).isRequired,
}
RichText.defaultProps = {
  className: '',
  data: {
    url: '',
  },
}
export default RichText
