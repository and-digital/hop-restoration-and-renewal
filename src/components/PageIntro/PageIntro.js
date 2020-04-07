import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import RichText from '../../components/RichText'
import {makeStyles} from '@material-ui/core/styles'
import {string, shape, object} from 'prop-types'

const useStyles = makeStyles(() => ({
  title: {
    marginBottom: '20px',
  },
}))
const PageIntro = ({title, text}) => {
  const classes = useStyles()

  return (
    <Box>
      <Typography variant="h1" className={classes.title}>
        {title}
      </Typography>
      <RichText text={text} />
    </Box>
  )
}

PageIntro.propTypes = {
  title: string.isRequired,
  text: shape({
    json: object.isRequired,
  }).isRequired,
}
export default PageIntro
