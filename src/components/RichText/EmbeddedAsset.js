import React from 'react'
import {shape, object} from 'prop-types'
import {Box} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles(() => ({
  imageWrapper: {
    width: '100%',
    maxWidth: '1150px',
    margin: '40px 0',
    '& img': {
      width: '100%',
    },
  },
}))

const EmbeddedAsset = ({
  data: {
    target: {
      fields: {file, title},
    },
  },
}) => {
  const classes = styles()
  return (
    <Box className={classes.imageWrapper}>
      <img src={file['en-US'].url} alt={title['en-US']} />
      <Typography variant="caption" className="image-description">
        {title['en-US']}
      </Typography>
    </Box>
  )
}
EmbeddedAsset.propTypes = {
  data: shape({
    target: shape({
      fields: shape({
        file: shape(object).isRequired,
        title: shape(object).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default EmbeddedAsset
