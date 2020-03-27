import React from 'react'
import {string} from 'prop-types'
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

const ImageWrapper = ({title, url}) => {
  const classes = styles()
  return (
    <Box className={classes.imageWrapper}>
      <img src={url} alt={title} />
      <Typography variant="caption">{title}</Typography>
    </Box>
  )
}

ImageWrapper.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
}

export default ImageWrapper
