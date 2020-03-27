import React from 'react'
import {string, shape, number} from 'prop-types'
import {makeStyles} from '@material-ui/styles'
import {Typography} from '@material-ui/core'
import displayWithUnits from 'filesize'

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.link.main,
    textDecoration: 'none',
  },
  linkText: {
    display: 'inline',
    background: theme.palette.background.sideBar,
    marginRight: '10px',
    padding: '8px',
  },
  fileInfo: {
    display: 'inline',
    fontSize: '21px',
    lineHeight: '28px',
  },
}))

const formatFileType = fileType =>
  fileType.slice(fileType.lastIndexOf('/') + 1).toUpperCase()

const formatFileSize = fileSize =>
  displayWithUnits(fileSize, {
    round: 0,
  })

const FileLink = ({title, file}) => {
  const classes = useStyles()
  const {
    fields: {
      file: {
        'en-US': {
          url,
          contentType,
          details: {size},
        },
      },
    },
  } = file
  const fileType = formatFileType(contentType)
  const fileSize = formatFileSize(size)
  return (
    <>
      <a href={url} className={classes.link}>
        <Typography variant="body1" className={classes.linkText}>
          {title}
        </Typography>
      </a>
      <Typography className={classes.fileInfo}>
        {fileType}, {fileSize}
      </Typography>
    </>
  )
}

FileLink.propTypes = {
  title: string.isRequired,
  file: shape({
    fields: shape({
      file: shape({
        'en-US': shape({
          url: string.isRequired,
          contentType: string.isRequired,
          details: shape({
            size: number.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default FileLink
