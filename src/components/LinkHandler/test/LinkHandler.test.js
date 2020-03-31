import React from 'react'
import * as Gatsby from 'gatsby'
import render from '../../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'
import LinkHandler from '../LinkHandler'

const gatsbyLinkSpy = jest.spyOn(Gatsby, 'Link')

describe('Link Handler', () => {
  beforeEach(() => {
    gatsbyLinkSpy.mockClear()
  })

  it('Internal links use Gatbsy Link', () => {
    render(<LinkHandler url="/internal-link" />)
    expect(gatsbyLinkSpy).toHaveBeenCalled()
  })

  it('External links use an a tag and open in same tab without new tab prop', () => {
    const {container} = render(<LinkHandler url="www.external-link.com" />)
    const aTag = container.querySelector('a')
    expect(aTag).toBeDefined()
    expect(aTag).not.toHaveAttribute('target', '_blank')
    expect(aTag).not.toHaveAttribute('rel', 'noopener noreferrer')
    expect(gatsbyLinkSpy).not.toHaveBeenCalled()
  })

  it('Passing new tab makes External links open in a new tab', () => {
    const {container} = render(
      <LinkHandler url="www.external-link.com" newTab />,
    )
    const aTag = container.querySelector('a')
    expect(aTag).toBeDefined()
    expect(aTag).toHaveAttribute('target', '_blank')
    expect(aTag).toHaveAttribute('rel', 'noopener noreferrer')
    expect(gatsbyLinkSpy).not.toHaveBeenCalled()
  })
})
