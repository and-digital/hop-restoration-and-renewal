import React from 'react'
import IndexPage from '../'
import {waitForDomChange} from '@testing-library/react'
import render from '../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'
import mockData from '../../stubs/mockData'
import headerData from '../../stubs/headerData'
import mockFooter from '../../stubs/mockFooter'

const heroImageTitle = 'Hero image title'

const heroData = {
  image: {
    title: heroImageTitle,
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
  },
}

const cardsData = [
  {
    title: 'Palace of Westminster',
    slug: 'palace',
    previewLinkName: 'link here',
    childContentfulSectionPreviewContentRichTextNode: {
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
    },
    hero: {
      image: {
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
      },
    },
  },
]

const homePageData = {
  contentfulTemplateHeroWithCards: {
    hero: heroData,
    cards: cardsData,
  },
}

test('should show page title, main heading text and section links', async () => {
  mockData(headerData)
  mockFooter()
  const title = 'Restoration and Renewal'
  const {getByText, getByTestId, getByAltText} = render(
    <IndexPage data={homePageData} />,
  )
  expect(getByText(title)).toBeDefined()
  await waitForDomChange()
  expect(document.title).toEqual(title)
  expect(getByTestId('header')).toBeDefined()
  expect(getByAltText(heroImageTitle)).toBeDefined()
  homePageData.contentfulTemplateHeroWithCards.cards.forEach(
    ({
      slug,
      previewLinkName,
      hero: {
        image: {title},
      },
    }) => {
      expect(getByAltText(title)).toBeDefined()
      expect(getByText(previewLinkName)).toBeDefined()
      expect(getByText(previewLinkName).parentNode).toHaveAttribute(
        'href',
        `/${slug}`,
      )
    },
  )
})
