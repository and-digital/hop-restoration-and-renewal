import {useEffect} from 'react'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-T8M7L77',
}

const Analytics = () => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])
  return ''
}

export default Analytics
