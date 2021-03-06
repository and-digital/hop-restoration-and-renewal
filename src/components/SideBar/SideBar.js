import React from 'react'
import {string, shape, arrayOf} from 'prop-types'
import SideBarMenu from './SideBarMenu'
import Hidden from '@material-ui/core/Hidden'
import SideBarDesktopMenu from './SideBarDesktopWrapper'
import SideBarMobileMenu from './SideBarMobileWrapper'

const SideBar = ({articleList}) => (
  <>
    <Hidden implementation="css" mdUp>
      <SideBarMobileMenu>
        <SideBarMenu articleList={articleList} />
      </SideBarMobileMenu>
    </Hidden>
    <Hidden implementation="css" smDown>
      <SideBarDesktopMenu>
        <SideBarMenu articleList={articleList} />
      </SideBarDesktopMenu>
    </Hidden>
  </>
)

SideBar.propTypes = {
  articleList: arrayOf(
    shape({
      slug: string,
      title: string,
      subArticleList: arrayOf(
        shape({
          shortTitle: string.isRequired,
          slug: string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
}

export default SideBar
