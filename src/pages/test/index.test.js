import React from 'react'
import IndexPage from '../'
import {waitForDomChange} from '@testing-library/react'
import render from '../../utils/tests/renderWithTheme'
import '@testing-library/jest-dom/extend-expect'
import mockFooter from '../../stubs/mockFooter'
import cardsData from '../../stubs/cardsData'
import mockSEO from '../../stubs/mockSEO'
import mockHeader from '../../stubs/mockHeader'
import mockIsMobile from '../../stubs/mockIsMobile'

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
  const title = 'Restoration and Renewal'
  const {getByText, getByTestId, getByAltText, container} = render(
    <IndexPage data={homePageData} />,
  )
  console.log(container.innerHTML)
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

test('successfully renders cards when in mobile view', async () => {
  mockIsMobile()
  mockSEO()
  mockHeader()
  mockFooter()
  const title = 'Restoration and Renewal'
  const {getByText, getByTestId, getByAltText, container} = render(
    <IndexPage data={homePageData} />,
  )
  console.log(container.innerHTML)
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
