import React from 'react'
// import {waitForDomChange} from '@testing-library/react'
import render from '../../../utils/tests/renderWithTheme'

// import mockHeader from '../../../stubs/mockHeader'
import SectionCard from '../'

const title = 'page title'
const content = 'this is some content for the section card'
const imageUrl = '/imagetest'

describe('section card', () => {
  it('should render a box with the title', async () => {
    const {getByText} = render(
      <SectionCard title={title} content={content} imageUrl={imageUrl} />,
    )
    expect(getByText(title)).toBeDefined()
  })

  it('should render a box with the content', async () => {
    const {getByText} = render(
      <SectionCard title={title} content={content} imageUrl={imageUrl} />,
    )
    expect(getByText(content)).toBeDefined()
  })

  it('should render a box with the image', async () => {
    const {getByText} = render(
      <SectionCard title={title} content={content} imageUrl={imageUrl} />,
    )
    expect(getByText(content)).toBeDefined()
  })
})
