const {generateComponentContext} = require('./utils')

const fName = process.argv[2]

const indexTemplate = `export {default} from './$CNAME'`
const componentTemplate = `import React from 'react'

const $CNAME = () => (
  <div>$CNAME page</div>
);

export default $CNAME;`
const componentTestTemplate = `import React from 'react'
import render from '../../utils/tests/renderWithSection'

import $CNAME from '../$CNAME'
it('should render the page', () => {
  const wrapper = render(<$CNAME />)
  expect(false).toEqual(true)
});`

const {writeComponent, writeIndex, writeTest} = generateComponentContext(
  '../src/pages',
  fName,
)

writeComponent(componentTemplate)
writeIndex(indexTemplate)
writeTest(componentTestTemplate)
