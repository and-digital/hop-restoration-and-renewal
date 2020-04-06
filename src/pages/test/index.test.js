import React from 'react'
import IndexPage from '../'
import {waitForDomChange} from '@testing-library/react'
import render from '../../utils/tests/renderWithHelmet'
import '@testing-library/jest-dom/extend-expect'
import mockFooter from '../../stubs/mockFooter'
import cardsData from '../../stubs/cardsData'
import mockSEO from '../../stubs/mockSEO'
import mockHeader from '../../stubs/mockHeader'
import mockIsMobile from '../../stubs/mockIsMobile'

const heroImageTitle = 'Hero image title'
const heroImageSubtitle = 'Hero image subtitle'
const text = {
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
              'Description of the Houses of Parliament Restoration and Renewal program',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
    ],
    nodeType: 'document',
  },
}
const quoteAuthor = 'Alan Turing'
const quoteDescription = 'Remember to be kind'

const heroData = {
  image: {
    title: heroImageTitle,
    fluid: {
      base64: '',
      aspectRatio: 100,
      src: '',
      srcSet: '',
      srcWebp: '',
      srcSetWebp: '',
      sizes: '',
    },
  },
  title: heroImageTitle,
  subtitle: heroImageSubtitle,
  text: text,
  quote: {
    quoteAuthor,
    quoteDescription: {quoteDescription},
  },
}

const homePageData = {
  contentfulTemplateHeroWithCards: {
    hero: heroData,
    cards: cardsData,
  },
}

test('should show page title, main heading text and section links', async () => {
  mockSEO()
  mockHeader()
  mockFooter()

  const {getByText, getByTestId, getByAltText} = render(
    <IndexPage data={homePageData} />,
  )

  await waitForDomChange()
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

test('successfully renders cards when in mobile view', async () => {
  mockIsMobile()
  mockSEO()
  mockHeader()
  mockFooter()
  const {getByText, getByTestId, getByAltText} = render(
    <IndexPage data={homePageData} />,
  )
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
