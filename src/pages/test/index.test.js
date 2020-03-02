import React from 'react'
import IndexPage from '../'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

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

test('test', () => {
  const {getByText} = render(<IndexPage data={data} />)
  expect(getByText('Restoration and Renewal')).toBeDefined()
  data.contentfulHeader.sections.forEach(({name}) => {
    const section = getByText(name)
    expect(section)
      .toBeDefined()
      .toHaveAttribute('href', '/palace')
  })
})
