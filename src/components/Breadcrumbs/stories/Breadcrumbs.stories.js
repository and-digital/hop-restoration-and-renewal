import React from 'react'
import {storiesOf} from '@storybook/react'
import {BreadcrumbsComponent} from '../Breadcrumbs'
import {withKnobs, text, object} from '@storybook/addon-knobs'

storiesOf('Breadcrumbs', module)
  .addDecorator(withKnobs)
  .add('Breadcrumbs', () => {
    const dividerCharacter = text('Divider Character', '›')
    const homepageText = text('Homepage Link Text', 'Home')
    const backText = text('Back Link Text', '‹ Back to ')
    const breadcrumbs = object('Breadcrumbs', [
      {title: 'About us', slug: '/about-us'},
      {title: 'More about us', slug: '/about-us/more'},
    ])
    const copyText = {dividerCharacter, homepageText, backText}
    return (
      <>
        <p>
          Styling doesn&apos;t work on Links because Gatsby Link has to be
          mocked out for storybook to work properly.
        </p>
        <BreadcrumbsComponent copyText={copyText} breadcrumbs={breadcrumbs} />
      </>
    )
  })
