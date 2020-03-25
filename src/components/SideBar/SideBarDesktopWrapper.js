import React from 'react'
import Box from '@material-ui/core/Box'
import {node} from 'prop-types'

const DesktopMenu = ({children}) => (
  <Box display="flex" alignItems="center" marginRight="10px">
    {children}
  </Box>
)

DesktopMenu.propTypes = {
  children: node.isRequired,
}

export default DesktopMenu
