import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import {string} from 'prop-types'
import {CardMedia, CardContent, Typography} from '@material-ui/core'

const useStyles = makeStyles({
  centered: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    width: 400,
    padding: '10px 20px',
    margin: '10px 0px',
  },
  cardSize: {
    height: 600,
    width: 450,
    display: 'flex',
    flexDirection: 'column',
    background: '#B0B0B0',
    color: 'white',
  },
  root: {
    height: 400,
    width: 400,
    margin: 15,
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-start',
    color: 'white',
  },
})

const SectionCard = ({title, imageUrl, content}) => {
  const classes = useStyles()
  return (
    <Card classes={{root: classes.cardSize}}>
      <CardContent component="h1" classes={{root: classes.centered}}>
        {title}
      </CardContent>
      <CardMedia classes={{root: classes.root}} image={imageUrl}></CardMedia>
      <CardContent classes={{root: classes.centered}}>
        <Typography>{content}</Typography>
      </CardContent>
    </Card>
  )
}

SectionCard.propTypes = {
  title: string.isRequired,
  imageUrl: string.isRequired,
  content: string.isRequired,
}

export default SectionCard
