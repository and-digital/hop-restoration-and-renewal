import React from 'react'
import {node} from 'prop-types'

import MainWrapper from './src/components/MainWrapper'

const wrapRootElement = ({element}) => {
  return <MainWrapper>{element}</MainWrapper>
}

wrapRootElement.propTypes = {
  element: node.isRequired,
}

export default wrapRootElement
