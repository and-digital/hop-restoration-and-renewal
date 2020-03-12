const styles = jest.requireActual('@material-ui/core/styles')
import palette from '../../../src/utils/palette'
module.exports = {
  ...styles,
  makeStyles: jest.fn(callBack => () => callBack({palette})),
}
