import React, {useState} from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'
import LinkHandler from '../LinkHandler'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Drawer from '@material-ui/core/Drawer'
import {makeStyles} from '@material-ui/core/styles'
import {arrayOf, shape, string, object} from 'prop-types'
import useLocation from '../../hooks/useLocation'
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
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
  },
  activeLink: {
    '& h6': {
      lineHeight: '40px',
      display: 'inline-block',
      borderBottom: '5px solid',
    },
  },
}))

const MobileMenu = ({footerLinks, sections}) => {
  const [isOpen, setIsOpen] = useState()
  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)
  const styles = useStyles()
  const {section} = useLocation()

  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      alignItems="center"
      height="100%"
    >
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
          <Grid container spacing={3} style={{width: 'calc(100% + 25px)'}}>
            {sections.map(({name, slug}) => (
              <Grid item key={name} xs={12} sm={12} md="auto">
                <LinkHandler
                  url={`/${slug}`}
                  className={classNames(styles.link, {
                    [styles.activeLink]: slug === section,
                  })}
                  data-cy="navigation-link"
                >
                  <Typography variant="h6">{name}</Typography>
                </LinkHandler>
              </Grid>
            ))}
          </Grid>
          <FooterLinks pages={footerLinks} />
        </Box>
      </Drawer>
    </Box>
  )
}

MobileMenu.propTypes = {
  footerLinks: arrayOf(object).isRequired,
  sections: arrayOf(
    shape({
      name: string.isRequired,
      slug: string.isRequired,
    }),
  ).isRequired,
}

export default MobileMenu