import React from 'react'
import Section from '..'
import {render, waitForDomChange} from '@testing-library/react'
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

test('show page title and component', async () => {
  const {getByText} = render(<Section data={data} />)
  await waitForDomChange()
  expect(document.title).toEqual(data.contentfulSection.name)
  expect(getByText(data.contentfulSection.name)).toBeDefined()
})

test('should show all the articles', () => {
  const {getByText} = render(<Section data={data} />)
  data.contentfulSection.articles.forEach(({name, slug}) => {
    const articleLink = getByText(name)
    expect(articleLink).toBeDefined()
    expect(articleLink).toHaveAttribute(
      'href',
      `/${data.contentfulSection.slug}/${slug}/`,
    )
  })
})
