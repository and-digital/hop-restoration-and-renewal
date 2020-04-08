import React from 'react'
import Section from '..'
import {waitForDomChange} from '@testing-library/react'
import render from '../../../utils/tests/renderWithHelmet'
import '@testing-library/jest-dom/extend-expect'
import mockHeader from '../../../stubs/mockHeader'
import mockFooter from '../../../stubs/mockFooter'
import mockSEO from '../../../stubs/mockSEO'

const heroData = {
  image: {
    title: 'Palace of Westminster river view from SE2',
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
  title: 'Palace of Westminster',
  text: {
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
                'The Restoration and Renewal of the Palace is a complex and large scale project affecting thousands of people. Our plan for the project is designed to minimise disruption and expense.',
              nodeType: 'text',
            },
          ],
          nodeType: 'paragraph',
        },
      ],
      nodeType: 'document',
    },
  },
}

const data = {
  contentfulSection: {
    title: 'Westminster',
    slug: 'palace',
    hero: heroData,
    articles: [
      {
        previewLinkText: 'history',
        slug: 'history',
        title: 'History',
        previewText: {
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
                      'First images of temporary House of Commons Chamber revealed. Plans will include a new temporary House of Commons Chamber, as well as work-space for all 650 MPs and their staff within a single secure site.',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'document',
          },
        },
      },
    ],
  },
}

beforeEach(() => {
  jest.clearAllMocks()
})

test('show page title and component', async () => {
  mockSEO()
  mockHeader()
  mockFooter()
  render(<Section data={data} />)
  await waitForDomChange()
  expect(document.title).toEqual(data.contentfulSection.title)
})

test('should show all the articles', () => {
  mockSEO()
  mockHeader()
  mockFooter()
  const {getByText} = render(<Section data={data} />)
  data.contentfulSection.articles.forEach(({previewLinkText, slug}) => {
    const articleLink = getByText(previewLinkText)
    expect(articleLink).toBeDefined()
    expect(articleLink.parentNode).toHaveAttribute(
      'href',
      `/${data.contentfulSection.slug}/${slug}`,
    )
  })
})
