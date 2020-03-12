import React from 'react'
import Section from '..'
import {waitForDomChange} from '@testing-library/react'
import render from '../../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'

import mockHeader from '../../../stubs/mockHeader'

const data = {
  contentfulSection: {
    title: 'Westminster',
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
  mockHeader()
  const {getByText} = render(<Section data={data} />)
  await waitForDomChange()
  expect(document.title).toEqual(data.contentfulSection.title)
  expect(getByText(data.contentfulSection.title)).toBeDefined()
})

test('should show all the articles', () => {
  mockHeader()
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
