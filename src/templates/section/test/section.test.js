import React from 'react'
import Section from '../'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const data = {
  contentfulSection: {
    name: 'Palace',
    slug: 'palace',
    articles: [
      {
        name: 'history',
        slug: 'history',
      },
    ],
  },
}

test('test', () => {
  const {getByText} = render(<Section data={data} />)
  expect(getByText(data.contentfulSection.name)).toBeDefined()
  data.contentfulSection.articles.forEach(({name, slug}) => {
    const articleLink = getByText(name)
    expect(articleLink).toBeDefined()
    expect(articleLink).toHaveAttribute(
      'href',
      `/${data.contentfulSection.slug}/${slug}/`,
    )
  })
})
