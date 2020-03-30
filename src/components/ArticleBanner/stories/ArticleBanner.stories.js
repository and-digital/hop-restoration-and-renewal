import React from 'react'
import {storiesOf} from '@storybook/react'
import ArticleBanner from '../ArticleBanner'
import {text, withKnobs} from '@storybook/addon-knobs'

storiesOf('ArticleBanner', module)
  .addDecorator(withKnobs)
  .add('ArticleBanner', () => {
    const section = {title: text('Title', 'Banner title')}
    return <ArticleBanner {...section} />
  })
