import React, {useState} from 'react'
import Box from '@material-ui/core/Box'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Drawer from '@material-ui/core/Drawer'
import {makeStyles} from '@material-ui/core/styles'
import {node, arrayOf, object} from 'prop-types'
import FooterLinks from './FooterLinks'

const useStyles = makeStyles(theme => ({
  paper: {
    background: theme.palette.background.mobileMenu,
    width: '100%',
  },
  closeIcon: {
    color: theme.palette.primary.cross,
    right: '29px',
    top: '28px',
    height: '45px',
    width: '45px',
    position: 'absolute',
  },
  menuIcon: {
    height: '42px',
    width: '60px',
  },
}))

const MobileMenu = ({footerLinks, children}) => {
  const [isOpen, setIsOpen] = useState()
  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)
  const styles = useStyles()

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" alignItems="center">
      <MenuIcon
        onClick={openMenu}
        color="primary"
        data-testid="mobileMenu"
        className={styles.menuIcon}
      />
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
        <Box margin="80px 105px 105px 50px" lineHeight="96px">
          {children}
          <FooterLinks pages={footerLinks} />
        </Box>
      </Drawer>
    </Box>
  )
}

MobileMenu.propTypes = {
  footerLinks: arrayOf(object).isRequired,
  children: node.isRequired,
}

export default MobileMenu
