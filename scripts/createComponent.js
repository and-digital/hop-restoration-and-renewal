const {generateComponentContext} = require('./utils')

const fName = process.argv[2]

const indexTemplate = `export {default} from './$CNAME'`
const componentTemplate = `import React from 'react';

const $CNAME = () => (
  <div>$CNAME component</div>
);

export default $CNAME;`
const componentStoryTemplate = `import React from 'react'
import { storiesOf } from '@storybook/react';
import $CNAME from '../$CNAME'

storiesOf('$CNAME', module)
  .add('$CNAME', () => (
   <$CNAME />
  ))
`

const componentTestTemplate = `import React from 'react'
import render from '../../../utils/tests/renderWithTheme'

import $CNAME from '..'

it('should render the component', () => {
  const wrapper = render(<$CNAME />)
  expect(false).toEqual(true)
})`

const {
  writeComponent,
  writeIndex,
  writeTest,
  writeStories,
} = generateComponentContext('../src/components', fName)

writeComponent(componentTemplate)
writeIndex(indexTemplate)
writeTest(componentTestTemplate)
writeStories(componentStoryTemplate)
