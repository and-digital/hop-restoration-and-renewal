import React, {useContext} from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import LocationProvider from '..'
import LocationContext from '../LocationContext'

const Component = () => {
  const {section, article, childArticle} = useContext(LocationContext)
  return (
    <>
      <p>
        <span>section</span>
        <span data-testid="section">{section}</span>
      </p>
      <p>
        <span>article</span>
        <span data-testid="article">{article}</span>
      </p>
      <p>
        <span>child article</span>
        <span data-testid="child-article">{childArticle}</span>
      </p>
    </>
  )
}

it('should have empty section, article and child article by default', () => {
  const {queryByTestId} = render(
    <LocationProvider>
      <Component />
    </LocationProvider>,
  )
  expect(queryByTestId('section')).toBeEmpty()
  expect(queryByTestId('article')).toBeEmpty()
  expect(queryByTestId('child-article')).toBeEmpty()
})

it('should return section, article and child article name', () => {
  const {getByText} = render(
    <LocationProvider section="palace" article="history" childArticle="reports">
      <Component />
    </LocationProvider>,
  )
  expect(getByText('palace')).toBeDefined()
  expect(getByText('history')).toBeDefined()
  expect(getByText('reports')).toBeDefined()
})
