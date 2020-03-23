import React from 'react'
import PropTypes from 'prop-types'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {INLINES, BLOCKS} from '@contentful/rich-text-types'
import ExternalLink from './ExternalLink'
import Paragraph from './Paragraph'
import EmbeddedComponent from './EmbeddedEntry'
import EmbeddedAsset from './EmbeddedAsset'
import HeadingOne from './HeadingOne'
import HeadingTwo from './HeadingTwo'

const RichText = ({className, text}) => {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: ExternalLink,
      [BLOCKS.PARAGRAPH]: Paragraph,
      [BLOCKS.HEADING_1]: HeadingOne,
      [BLOCKS.HEADING_2]: HeadingTwo,
      [BLOCKS.EMBEDDED_ENTRY]: EmbeddedComponent,
      [BLOCKS.EMBEDDED_ASSET]: EmbeddedAsset,
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
