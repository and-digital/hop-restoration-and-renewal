import React from 'react'
import {arrayOf, shape, string} from 'prop-types'
import LinkHandler from '../LinkHandler'

const RichTextLink = ({data: {uri}, content: [{value: text}]}) => (
  <LinkHandler newTab url={uri}>
    {text}
  </LinkHandler>
)

RichTextLink.propTypes = {
  data: shape({
    uri: string.isRequired,
  }).isRequired,
  content: arrayOf(
    shape({
      value: string.isRequired,
    }),
  ).isRequired,
}

export default RichTextLink
