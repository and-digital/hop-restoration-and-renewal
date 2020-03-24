import React, {useEffect} from 'react'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-T8M7L77',
}

const Analytics = () => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])
  return <div />
}

export default Analytics
