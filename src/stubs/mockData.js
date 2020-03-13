import {useStaticQuery} from 'gatsby'

export default data => {
  useStaticQuery.mockImplementationOnce(() => data)
}
