import React from 'react'
import {arrayOf, shape, string} from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import BreadcrumbLink from './BreadcrumbLink'
import {useTheme} from '@material-ui/core/styles'

const DesktopBreadcrumbs = ({breadcrumbs, dividerCharacter, homepageText}) => {
  const theme = useTheme()
  return (
    <Box>
      <Typography variant="body1">
        <BreadcrumbLink url="/">{homepageText}</BreadcrumbLink>
        {breadcrumbs &&
          breadcrumbs.map(({slug, title}) => (
            <span key={slug}>
              <Box
                fontWeight="bold"
                color={theme.palette.link.main}
                component="span"
              >
                {` ${dividerCharacter} `}
              </Box>
              <BreadcrumbLink url={`/${slug}`}>{title}</BreadcrumbLink>
            </span>
          ))}
      </Typography>
    </Box>
  )
}

DesktopBreadcrumbs.propTypes = {
  breadcrumbs: arrayOf(
    shape({
      title: string.isRequired,
      slug: string.isRequired,
    }),
  ).isRequired,
  dividerCharacter: string.isRequired,
  homepageText: string.isRequired,
}

export default DesktopBreadcrumbs
