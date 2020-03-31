import React from 'react'
import {string, number} from 'prop-types'
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
  container: {
    margin: '32px 0',
  },
}))

const formatFileType = fileType =>
  fileType.slice(fileType.lastIndexOf('/') + 1).toUpperCase()

const formatFileSize = fileSize =>
  displayWithUnits(fileSize, {
    round: 0,
  })

const FileLink = ({title, url, contentType, size}) => {
  const classes = useStyles()
  const fileType = formatFileType(contentType)
  const fileSize = formatFileSize(size)
  return (
    <div className={classes.container}>
      <a href={url} className={classes.link}>
        <Typography variant="body1" className={classes.linkText}>
          {title}
        </Typography>
      </a>
      <Typography className={classes.fileInfo}>
        {fileType}, {fileSize}
      </Typography>
    </div>
  )
}

FileLink.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
  contentType: string.isRequired,
  size: number.isRequired,
}

export default FileLink
