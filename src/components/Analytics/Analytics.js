import {useEffect} from 'react'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-MKRWMRP',
}

const Analytics = () => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])
  return ''
}

export default Analytics
