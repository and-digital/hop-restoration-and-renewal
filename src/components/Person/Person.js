import React from 'react'
import {object, shape, string} from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import {Box} from '@material-ui/core'
import Image from 'gatsby-image'
import Typography from '@material-ui/core/Typography'
import RichText from '../RichText'

const useStyles = makeStyles(() => ({
  personWrapper: {
    width: '100%'
  },
  avatar: {
   width: "190px"
  },
}))

const Person = ({avatar: {title: avatarTitle, fluid}, title, description}) => {
  const classes = useStyles()

  return (
    <Box component="section" className={classes.personWrapper}>
      <Box className={classes.avatar}>
        {/*<Image fluid={fluid} alt={avatarTitle} />*/}
      </Box>
      <Box className={classes.contextWrapper}>
        <Box>
          <Typography variant="h4">{title}</Typography>
          <RichText text={description} className={classes.description} />
        </Box>
      </Box>
    </Box>
  )
}

Person.propTypes = {
  avatar: shape({
    title: string.isRequired,
    fluid: object.isRequired,
  }).isRequired,
  title: string.isRequired,
  description: shape({
    json: object.isRequired,
  }).isRequired,
}

export default Person
