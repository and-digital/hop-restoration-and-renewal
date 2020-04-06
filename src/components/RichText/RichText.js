import React from 'react'
import {shape, string, object} from 'prop-types'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {INLINES, BLOCKS} from '@contentful/rich-text-types'
import RichTextLink from './RichTextLink'
import Paragraph from './Paragraph'
import EmbeddedComponent from './EmbeddedEntry'
import EmbeddedAsset from './EmbeddedAsset'
import HeadingOne from './HeadingOne'
import HeadingTwo from './HeadingTwo'
import HeadingThree from './HeadingThree'
import HeadingFour from './HeadingFour'

const RichText = ({className, text}) => {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: RichTextLink,
      [BLOCKS.PARAGRAPH]: Paragraph,
      [BLOCKS.HEADING_1]: HeadingOne,
      [BLOCKS.HEADING_2]: HeadingTwo,
      [BLOCKS.HEADING_3]: HeadingThree,
      [BLOCKS.HEADING_4]: HeadingFour,
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
  data: shape({
    uri: string,
  }),
  className: string,
  text: shape({
    json: object,
  }).isRequired,
}

RichText.defaultProps = {
  className: '',
  data: {
    url: '',
  },
}

export default RichText
