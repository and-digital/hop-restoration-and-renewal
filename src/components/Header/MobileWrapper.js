import React, {useState} from 'react'

import Box from '@material-ui/core/Box'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Drawer from '@material-ui/core/Drawer'
import {makeStyles} from '@material-ui/core/styles'
import {node} from 'prop-types'

const useStyles = makeStyles(theme => ({
  paper: {
    background: theme.palette.background.mobileMenu,
    width: '100%',
  },
  MuiAppBar: {
    colorPrimary: theme.palette.primary.main,
  },
  closeIcon: {
    color: theme.palette.primary.cross,
    right: '29px',
    top: '28px',
    height: '45px',
    width: '45px',
    position: 'absolute',
  },
}))

const MobileMenu = ({children}) => {
  const [isOpen, setIsOpen] = useState()
  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)
  const styles = useStyles()

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" alignItems="center">
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
          className={styles.closeIcon}
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
