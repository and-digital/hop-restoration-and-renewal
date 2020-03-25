import React from 'react'
import { storiesOf } from '@storybook/react';
import Person from '../Person'

storiesOf('Person', module)
  .add('Person', () => (
   <Person />
  ))
