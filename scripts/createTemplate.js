const {generateComponentContext} = require('./utils')

const fName = process.argv[2]

const indexTemplate = `export {default} from './$CNAME'`
const componentTemplate = `import React from 'react';

const $CNAME = () => (
  <div>$CNAME component</div>
);

export default $CNAME;`
const componentStoryTemplate = `
import React from 'react'
import $CNAME from '../$CNAME'

export default {title: '$CNAME'}

export const withProps = () => <$CNAME />
`
const componentTestTemplate = `import React from 'react'
import render from '../../../utils/tests/renderWithHelmet'

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
} = generateComponentContext('../src/templates', fName)

writeComponent(componentTemplate)
writeIndex(indexTemplate)
writeTest(componentTestTemplate)
writeStories(componentStoryTemplate)
