import React from 'react'
import {arrayOf, string, shape} from 'prop-types'
import MobileBreadcrumbs from './MobileBreadcrumbs'
import DesktopBreadcrumbs from './DesktopBreadcrumbs'
import Hidden from '../Hidden/Hidden'

const Breadcrumbs = ({breadcrumbs}) => {
  const data = {
    dividerCharacter: '›',
    homepageText: 'Home',
    backText: '‹ Back to ',
  }
  return <BreadcrumbsComponent breadcrumbs={breadcrumbs} copyText={data} />
}

const BreadcrumbsComponent = ({breadcrumbs, copyText}) => {
  const {dividerCharacter, homepageText, backText} = copyText
  return (
    <>
      <Hidden mdUp>
        <MobileBreadcrumbs breadcrumbs={breadcrumbs} backText={backText} />
      </Hidden>
      <Hidden smDown>
        <DesktopBreadcrumbs
          breadcrumbs={breadcrumbs}
          dividerCharacter={dividerCharacter}
          homepageText={homepageText}
        />
      </Hidden>
    </>
  )
}

const breadcrumbsPropTypes = {
  breadcrumbs: arrayOf(
    shape({
      title: string.isRequired,
      slug: string.isRequired,
    }),
  ).isRequired,
}

Breadcrumbs.propTypes = breadcrumbsPropTypes

BreadcrumbsComponent.propTypes = {
  ...breadcrumbsPropTypes,
  copyText: shape({
    dividerCharacter: string,
    homepageText: string,
    backText: string,
  }),
}

export default Breadcrumbs
