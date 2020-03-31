const {generateProviderContext} = require('./utils')

const fName = process.argv[2]

const indexTemplate = `export {default} from './$CNAMEProvider'`

const contextTemplate = `import {createContext} from 'react'

export default createContext()`

const providerTemplate = `import React from 'react'
import {node} from 'prop-types'

import $CNAMEContext from './$CNAMEContext'

const {Provider} = $CNAMEContext

const $CNAMEProvider = ({children}) => (
  <Provider>
  {
    children
  }
  </Provider>
);

$CNAMEProvider.propTypes = {
  children: node.isRequired,
}

export default $CNAMEProvider;`

const providerTestTemplate = `import React from 'react'
import {render} from '@testing-library/react'

import $CNAMEProvider from '..'

it('should render the provider', () => {
  const wrapper = render(<$CNAMEProvider />)
  expect(false).toEqual(true)
})`

const {
  writeContext,
  writeProvider,
  writeIndex,
  writeTest,
} = generateProviderContext('../src/providers', fName)

writeContext(contextTemplate)
writeProvider(providerTemplate)
writeIndex(indexTemplate)
writeTest(providerTestTemplate)
