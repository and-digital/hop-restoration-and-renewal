/* eslint-disable react/display-name */
import React from 'react'
import PropTypes from 'prop-types'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {INLINES} from '@contentful/rich-text-types'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  richTextLink: {
    color: theme.palette.links.main,
  },
}))

const RichText = ({className, text}) => {
  const classes = useStyles()
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: ({data: {uri}}, children) => {
        return (
          <a
            href={uri}
            className={classes.richTextLink}
            data-testid="hyperlink-richtext"
          >
            {children}
          </a>
        )
      },
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
