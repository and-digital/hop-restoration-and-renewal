import React from 'react'
import {string, shape, arrayOf} from 'prop-types'
import useRichText from '../../hooks/useRichText'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  paragraph: {
    marginBottom: '30px',
  },
}))

const Paragraph = (node, children) => {
  const {bodyType} = useRichText()
  const styles = useStyles()
  return (
    <Typography className={styles.paragraph} variant={bodyType} component={'p'}>
      {children}
    </Typography>
  )
}

Paragraph.propTypes = {
  data: shape({
    uri: string.isRequired,
  }).isRequired,
  content: arrayOf(
    shape({
      value: string.isRequired,
    }),
  ).isRequired,
}

export default Paragraph
