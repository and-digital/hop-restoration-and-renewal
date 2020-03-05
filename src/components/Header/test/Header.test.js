import React from 'react'
import {render} from '@testing-library/react'
import {useStaticQuery} from 'gatsby'
import '@testing-library/jest-dom/extend-expect'

import Header from '..'

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

it('should render the component', () => {
  useStaticQuery.mockImplementation(() => data)
  const {getByText} = render(<Header />)
  data.contentfulHeader.sections.forEach(({name}) => {
    const section = getByText(name)
    expect(section).toBeDefined()
    expect(section).toHaveAttribute('href', '/palace')
  })
})
