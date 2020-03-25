import React from 'react'
import Box from '@material-ui/core/Box'
import {node} from 'prop-types'

const SideBarDesktopMenu = ({children}) => (
  <Box display="flex" alignItems="center" marginRight="10px">
    {children}
  </Box>
)

SideBarDesktopMenu.propTypes = {
  children: node.isRequired,
}

export default SideBarDesktopMenu
