import React from 'react'
import {string, shape, arrayOf} from 'prop-types'
import SideBarMenu from './SideBarMenu'
import Hidden from '@material-ui/core/Hidden'
import SideBarDesktopMenu from './SideBarDesktopWrapper'
import SideBarMobileMenu from './SideBarMobileWrapper'

const SideBar = ({articleList, subarticleList}) => (
  <>
    <Hidden implementation="css" mdUp>
      <SideBarMobileMenu>
        <SideBarMenu
          articleList={articleList}
          subarticleList={subarticleList}
        />
      </SideBarMobileMenu>
    </Hidden>
    <Hidden implementation="css" smDown>
      <SideBarDesktopMenu>
        <SideBarMenu
          articleList={articleList}
          subarticleList={subarticleList}
        />
      </SideBarDesktopMenu>
    </Hidden>
  </>
)

SideBar.propTypes = {
  articleList: arrayOf(
    shape({
      slug: string,
      title: string,
    }),
  ).isRequired,
}

export default SideBar
