import React from 'react'
import IndexPage from '../'
import {render, waitForDomChange} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import mockData from '../../stubs/mockData'
import headerData from '../../stubs/headerData'

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
    slug: 'palace',
    previewLinkName: 'link here',
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
        slug,
      )
    },
  )
})
