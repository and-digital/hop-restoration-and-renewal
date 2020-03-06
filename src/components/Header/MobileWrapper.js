import React, {useState} from 'react'

import Box from '@material-ui/core/Box'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Drawer from '@material-ui/core/Drawer'
import {makeStyles} from '@material-ui/core/styles'
import {node} from 'prop-types'

const useStyles = makeStyles({
  paper: {
    background: '#8B7DC8',
  },
})

const MobileMenu = ({children}) => {
  const [isOpen, setIsOpen] = useState()
  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)
  const styles = useStyles()

  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <MenuIcon onClick={openMenu} color="primary" data-testid="mobileMenu" />
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={closeMenu}
        data-testid="drawer"
        classes={{paper: styles.paper}}
      >
        <CloseIcon
          onClick={closeMenu}
          color="primary"
          data-testid="closeMenu"
        />
        {children}
      </Drawer>
    </Box>
  )
}

MobileMenu.propTypes = {
  children: node.isRequired,
}

export default MobileMenu
