const fs = require('fs')
const path = require('path')
const COMPONENTS_DIR = path.resolve(__dirname, '../src/components')

const fName = process.argv[2]

const replaceInTemplate = template => needle =>
  template.replace(/\$CNAME/g, needle).replace(/\$FNAME/g, needle)

const indexTemplate = `export { default } from './$CNAME'`
const componentTemplate = `import React from 'react';

const $CNAME = () => (
  <div>$CNAME component</div>
);

export default $CNAME;`
const componentTestTemplate = `import React from 'react';
import { render } from 'testing-library/react';

import $CNAME from '../$CNAME';
it('should render the component', () => {
  const wrapper = render(<$CNAME />);
  expect(false).toEqual(true);
});`

fs.mkdirSync(`${COMPONENTS_DIR}/${fName}`)
fs.mkdirSync(`${COMPONENTS_DIR}/${fName}/test`)

fs.writeFileSync(
  `${COMPONENTS_DIR}/${fName}/${fName}.js`,
  replaceInTemplate(componentTemplate)(fName),
  'utf8',
)
fs.writeFileSync(
  `${COMPONENTS_DIR}/${fName}/index.js`,
  replaceInTemplate(indexTemplate)(fName),
  'utf8',
)

fs.writeFileSync(
  `${COMPONENTS_DIR}/${fName}/test/${fName}.test.js`,
  replaceInTemplate(componentTestTemplate)(fName),
  'utf8',
)
