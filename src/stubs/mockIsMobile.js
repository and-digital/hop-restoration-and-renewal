import {useMediaQuery} from '@material-ui/core'

export default () => useMediaQuery.mockImplementation(() => false)
