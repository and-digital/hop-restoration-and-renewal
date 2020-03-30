import {useContext} from 'react'
import LocationContext from '../../providers/LocationProvider/LocationContext'

export default () => {
  const location = useContext(LocationContext)
  return location
}
