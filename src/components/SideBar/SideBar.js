import React from 'react'
import {string, shape, arrayOf} from 'prop-types'
import Menu from './SideBarMenu'
import {useTheme} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import DesktopMenu from './SideBarDesktopWrapper'
import MobileMenu from './SideBarMobileWrapper'

const SideBar = ({articleList}) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const Wrapper = isDesktop ? DesktopMenu : MobileMenu

  return (
    <Wrapper>
      <Menu articleList={articleList} />
    </Wrapper>
  )
}

SideBar.propTypes = {
  articleList: arrayOf(
    shape({
      slug: string,
      title: string,
    }),
  ).isRequired,
}

export default SideBar
