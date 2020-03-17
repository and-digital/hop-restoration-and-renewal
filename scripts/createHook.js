const {generateComponentContext} = require('./utils')

const fName = process.argv[2]

const indexTemplate = `export {default} from './$CNAME'`
const hookTemplate = `import {useState} from 'react'

export default () => {
  const [data, setData] = useState();
  return [data, setData]
}`
const hookTestTemplate = `
import {renderHook, act} from '@testing-library/react-hooks'
import $CNAME from './$CNAME'

test('should increment counter', () => {
  const {result} = renderHook(() => $CNAME())
  const [data, setDataa] = results
  act(() => {
    setData('test')
  })

  expect(data).toBe('test')
})
`

const {writeComponent, writeIndex, writeTest} = generateComponentContext(
  '../src/hooks',
  fName,
)

writeComponent(hookTemplate)
writeIndex(indexTemplate)
writeTest(hookTestTemplate)
