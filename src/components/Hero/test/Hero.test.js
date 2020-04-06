import React from 'react'
import render from '../../../utils/tests/renderWithTheme'
import Hero from '..'

const image = {
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
}

it('should display an image', () => {
  const {getByAltText} = render(<Hero image={image} />)
  expect(getByAltText(image.title)).toBeDefined()
})
