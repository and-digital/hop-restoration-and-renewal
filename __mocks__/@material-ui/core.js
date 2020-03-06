const core = jest.requireActual('@material-ui/core')

module.exports = {
  ...core,
  useMediaQuery: jest.fn(() => true),
}
