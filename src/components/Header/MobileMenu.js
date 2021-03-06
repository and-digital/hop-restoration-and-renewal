import React, {useState} from 'react'
import Box from '@material-ui/core/Box'
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
import Image from 'gatsby-image'

const useStyles = makeStyles(theme => ({
  paper: {
    background: theme.palette.background.mobileMenu,
    width: '100%',
  },
  closeIcon: {
    color: theme.palette.primary.cross,
    height: '45px',
    width: '45px',
    position: 'absolute',
    right: '21px',
    top: '21px',
    [theme.breakpoints.up('md')]: {right: '34px', top: '34px'},
  },
  menuIcon: {
    position: 'absolute',
    height: '42px',
    width: '60px',
    right: '21px',
    top: '21px',
    [theme.breakpoints.up('md')]: {right: '34px', top: '34px'},
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
  linkBox: {
    boxSizing: 'border-box',
    padding: '25px',
  },
  logo: {
    width: '200px',
    height: '28px',
    [theme.breakpoints.up(390)]: {width: '250px', height: '35px'},
    [theme.breakpoints.up('md')]: {width: '440px', height: '60px'},
  },
  menuBar: {
    justifyContent: 'flex-start',
    [theme.breakpoints.up('sm')]: {justifyContent: 'center'},
  },
}))

const MobileMenu = ({
  footerLinks,
  sections,
  logo: {fluid, title},
  homePageLinkText,
}) => {
  const [isOpen, setIsOpen] = useState()
  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)
  const styles = useStyles()
  const {section} = useLocation()

  return (
    <>
      <Box
        display="flex"
        maxWidth={1620}
        margin="auto"
        className={styles.menuBar}
      >
        <LinkHandler
          url="/"
          className={styles.linkBox}
          aria-label={homePageLinkText}
        >
          <Image
            fluid={fluid}
            alt={title}
            className={styles.logo}
            imgStyle={{objectFit: 'contain'}}
          />
        </LinkHandler>
      </Box>

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
          {sections.map(({name, slug}) => (
            <LinkHandler
              key={name}
              url={`/${slug}`}
              className={classNames(styles.link, {
                [styles.activeLink]: slug === section,
              })}
              data-cy="navigation-link"
            >
              <Typography variant="h6">{name}</Typography>
            </LinkHandler>
          ))}
          <FooterLinks pages={footerLinks} />
        </Box>
      </Drawer>
    </>
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
  logo: shape({fluid: object.isRequired, title: string.isRequired}).isRequired,
  homePageLinkText: string.isRequired,
}

export default MobileMenu
