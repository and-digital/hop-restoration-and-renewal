import React from 'react'
import IndexPage from '../'
import {render, waitForDomChange} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {useStaticQuery} from 'gatsby'

const data = {
  contentfulHeader: {
    sections: [
      {
        name: 'Palace',
        slug: 'palace',
      },
    ],
  },
}

test('should show page title, main heading text and section links', async () => {
  useStaticQuery.mockImplementation(() => data)
  const title = 'Restoration and Renewal'
  const {getByText} = render(<IndexPage />)
  expect(getByText(title)).toBeDefined()
  await waitForDomChange()
  expect(document.title).toEqual(title)
  data.contentfulHeader.sections.forEach(({name}) => {
    const section = getByText(name)
    expect(section).toBeDefined()
    expect(section).toHaveAttribute('href', '/palace')
  })
})
