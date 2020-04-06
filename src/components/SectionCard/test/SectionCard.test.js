import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'
import SectionCard from '..'

const image = {
  title: 'palace image',
  fluid: {
    base64: '',
    aspectRatio: 1000,
    height: 400,
    src: '',
    srcSet: '',
    srcSetWebp: '',
    srcWebp: '',
    sizes: '',
  },
}

const testBody = {
  json: {
    data: {},
    content: [
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              'The Palace of Westminster is an icon of our nation, a symbol of democracy, and a workplace for thousands. Today its structure and workings need urgent attention.',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
    ],
    nodeType: 'document',
  },
}

const slug = 'path'
const sectionTitle = 'title'
const linkText = 'here is a link'
const bgColour = 'green'
const description =
  'The Palace of Westminster is an icon of our nation, a symbol of democracy, and a workplace for thousands. Today its structure and workings need urgent attention.'

it('should show an image,description and a link with text', () => {
  const {getByText} = render(
    <SectionCard
      slug={slug}
      image={image}
      linkText={linkText}
      cardBackground={bgColour}
      body={testBody}
      sectionTitle={sectionTitle}
    />,
  )

  const cardBody = getByText(description)
  expect(cardBody).toBeDefined()
  const link = getByText(linkText)
  expect(link).toBeDefined()
  expect(link.parentNode).toHaveAttribute('href', '/path')
})
