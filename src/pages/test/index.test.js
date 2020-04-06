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

const heroImageText = {
  json: {
    data: {},
    content: [
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: 'Restoration and Renewal',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
    ],
  },
}

const heroData = {
  image: {
    title: heroImageTitle,
    fluid: {
      base64:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAMAAAD0SU6vAAABZVBMVEW54Pe02/KTrbx1XknRrXyhv8WHwNl7uNR0ss50scxxrcdop8FkpL5lpb5mpr1pqL90rsV7tMt3tMx8uNHD5vqz3fKLq7lzWEGsilyiwMOPxNqNwteHvdGDus5/tMh3q75+qbV0rL5zq753rr9xoK6BtMSDu86EvdHa8f3G4OubrrZtUDnPomiqwL6byNeWtLiRs7mMr7eLt8N/nKCHmpKAqbOItcBXcneTqqKUws+ZxtPI08p6fWFna0xPSyGAcD6Yl4OTpKRpVDiCaUePdE2kqZp+fnNnVjh7e2mhsKh8fGtlZlyjoYukr6mwurVFTB43NRM5QBQxMg40OhEyOxImGw5eRyzMoGS/l127lV6riVajf0uxiU6qhUyefEaMdUuDcUtAOSZ7aERmYztLTCZMUidEQiBAPh9DRCFpXjl6ZEPLpmvCnmW6lmKyj16ph1OkiVaiiVahh1Gjh1GehVRZUDWHd1GY4loyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AMGECctoPabWAAAABtJREFUCNdjZGDEAkSwiLGgCYI1sggToRK3IAA4OADnzC+SIgAAAABJRU5ErkJggg==',
      aspectRatio: 3.1735537190082646,
      src:
        '//images.ctfassets.net/h5nvy9gnf018/6qCoknHe5VXCIX4zwT9uhz/b7951b0e353fbb752aa8708f49c799ee/Palace_River_Front_from_SE2_1.png?w=1920&q=50',
      srcSet:
        '//images.ctfassets.net/h5nvy9gnf018/6qCoknHe5VXCIX4zwT9uhz/b7951b0e353fbb752aa8708f49c799ee/Palace_River_Front_from_SE2_1.png?w=480&h=151&q=50 480w,\n//images.ctfassets.net/h5nvy9gnf018/6qCoknHe5VXCIX4zwT9uhz/b7951b0e353fbb752aa8708f49c799ee/Palace_River_Front_from_SE2_1.png?w=960&h=303&q=50 960w,\n//images.ctfassets.net/h5nvy9gnf018/6qCoknHe5VXCIX4zwT9uhz/b7951b0e353fbb752aa8708f49c799ee/Palace_River_Front_from_SE2_1.png?w=1920&h=605&q=50 1920w',
      srcWebp:
        '//images.ctfassets.net/h5nvy9gnf018/6qCoknHe5VXCIX4zwT9uhz/b7951b0e353fbb752aa8708f49c799ee/Palace_River_Front_from_SE2_1.png?w=1920&q=50&fm=webp',
      srcSetWebp:
        '//images.ctfassets.net/h5nvy9gnf018/6qCoknHe5VXCIX4zwT9uhz/b7951b0e353fbb752aa8708f49c799ee/Palace_River_Front_from_SE2_1.png?w=480&h=151&q=50&fm=webp 480w,\n//images.ctfassets.net/h5nvy9gnf018/6qCoknHe5VXCIX4zwT9uhz/b7951b0e353fbb752aa8708f49c799ee/Palace_River_Front_from_SE2_1.png?w=960&h=303&q=50&fm=webp 960w,\n//images.ctfassets.net/h5nvy9gnf018/6qCoknHe5VXCIX4zwT9uhz/b7951b0e353fbb752aa8708f49c799ee/Palace_River_Front_from_SE2_1.png?w=1920&h=605&q=50&fm=webp 1920w',
      sizes: '(max-width: 1920px) 100vw, 1920px',
    },
  },
  title: heroImageTitle,
  text: heroImageText,
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

test('successfully renders cards when in mobile view', async () => {
  mockIsMobile()
  mockSEO()
  mockHeader()
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
