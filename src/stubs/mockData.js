import {useStaticQuery} from 'gatsby'

export default data => {
  useStaticQuery.mockImplementation(() => data)
}
