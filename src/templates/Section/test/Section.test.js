import React from 'react'
import Section from '..'
import headerData from '../../../stubs/headerData'
import {render, waitForDomChange} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {useStaticQuery} from 'gatsby'

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
  useStaticQuery.mockImplementation(() => headerData)
  const {getByText} = render(<Section data={data} />)
  await waitForDomChange()
  expect(document.title).toEqual(data.contentfulSection.title)
  expect(getByText(data.contentfulSection.title)).toBeDefined()
})

test('should show all the articles', () => {
  useStaticQuery.mockImplementation(() => headerData)
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
