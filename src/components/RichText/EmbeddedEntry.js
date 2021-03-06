import React from 'react'
import MailTo from './MailTo'
import {shape, string, object} from 'prop-types'
import Person from '../Person'

const EmbeddedComponents = {
  mailto: MailTo,
  person: Person,
}

const EmbeddedComponent = ({
  data: {
    target: {
      sys: {
        contentType: {
          sys: {id},
        },
      },
      fields,
    },
  },
}) => {
  const Component = EmbeddedComponents[id]
  const localizedFields = Object.entries(fields).reduce(
    (accumulator, [key, value]) => ({
      ...accumulator,
      [key]: value['en-US'],
    }),
    {},
  )
  return <Component {...localizedFields} />
}

EmbeddedComponent.propTypes = {
  data: shape({
    target: shape({
      sys: shape({
        contentType: shape({
          sys: shape({
            id: string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    fields: shape(object).isRequired,
  }).isRequired,
}

export default EmbeddedComponent
