import theme from './theme'

test('theme should be that', () => {
  expect(theme).toMatchSnapshot()
})
