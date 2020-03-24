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
import HeadingThree from './HeadingThree'
import HeadingFour from './HeadingFour'
import HeadingFive from './HeadingFive'
import HeadingSix from './HeadingSix'

const RichText = ({className, text}) => {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: ExternalLink,
      [BLOCKS.PARAGRAPH]: Paragraph,
      [BLOCKS.HEADING_1]: HeadingOne,
      [BLOCKS.HEADING_2]: HeadingTwo,
      [BLOCKS.HEADING_3]: HeadingThree,
      [BLOCKS.HEADING_4]: HeadingFour,
      [BLOCKS.HEADING_5]: HeadingFive,
      [BLOCKS.HEADING_6]: HeadingSix,
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
