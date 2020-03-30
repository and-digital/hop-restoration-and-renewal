import React, {useState} from 'react'
import Box from '@material-ui/core/Box'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import {makeStyles} from '@material-ui/core/styles'
import {node} from 'prop-types'
import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

const useStyles = makeStyles(theme => ({
  header: {
    width: '100%',
    borderRadius: 0,
  },
  paper: {
    background: theme.palette.background.mobileMenu,
    color: theme.palette.secondary.main,
  },
  menu: {
    background: theme.palette.background.sideBar,
  },
  menuIcon: {
    height: '42px',
    width: '60px',
    color: theme.palette.secondary.main,
  },
}))

const SideBarMobileMenu = ({children}) => {
  const [isOpen, setIsOpen] = useState()
  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)
  const styles = useStyles()

  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      alignItems="center"
      width="100%"
      margin="auto"
    >
      <ExpansionPanel className={styles.header}>
        <ExpansionPanelSummary
          data-testid="sidebarMobileMenu"
          className={styles.paper}
          onClick={isOpen ? closeMenu : openMenu}
          expandIcon={
            isOpen ? (
              <RemoveIcon
                data-testid="closeMenuIcon"
                className={styles.menuIcon}
              />
            ) : (
              <AddIcon data-testid="openMenuIcon" className={styles.menuIcon} />
            )
          }
        >
          <Typography>Section menu</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={styles.menu}>
          {children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Box>
  )
}

SideBarMobileMenu.propTypes = {
  children: node.isRequired,
}

export default SideBarMobileMenu
