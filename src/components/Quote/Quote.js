import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import {string} from 'prop-types'

const Quote = ({quoteDescription, quoteAuthor}) => (
  <>
    <Box mb="35px">
      <Typography variant="subtitle2">{quoteDescription}</Typography>
    </Box>
    <Typography variant="h3">{quoteAuthor}</Typography>
  </>
)

Quote.propTypes = {
  quoteDescription: string.isRequired,
  quoteAuthor: string,
}

Quote.defaultProps = {
  quoteAuthor: '',
}

export default Quote
