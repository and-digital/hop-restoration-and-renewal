import {useStaticQuery} from 'gatsby'

import data from './headerData'

export default () => {
  useStaticQuery.mockImplementation(() => data)
}
