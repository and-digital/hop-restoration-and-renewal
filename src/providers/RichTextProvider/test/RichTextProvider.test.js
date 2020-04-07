import React, {useContext} from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import RichTextProvider from '..'
import RichTextContext from '../RichTextContext'
import Typography from '@material-ui/core/Typography'

const Component = () => {
  const {bodyType} = useContext(RichTextContext)

  return (
    <>
      <Typography variant={bodyType} data-testid="typography">
        test body
      </Typography>
    </>
  )
}

it('should render as body1', () => {
  const {queryByTestId} = render(
    <RichTextProvider>
      <Component />
    </RichTextProvider>,
  )
  expect(queryByTestId('typography')).toHaveClass('MuiTypography-body1')
})

it('should render as body2', () => {
  const {queryByTestId} = render(
    <RichTextProvider bodyType="body2">
      <Component />
    </RichTextProvider>,
  )
  expect(queryByTestId('typography')).toHaveClass('MuiTypography-body2')
})
