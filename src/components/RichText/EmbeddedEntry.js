import React from 'react'
import MailTo from './MailTo'
import {shape, string, object} from 'prop-types'

const EmbeddedComponents = {
  mailto: MailTo,
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
  const localizedFields = {}
  Object.keys(fields).forEach(key => {
    localizedFields[key] = fields[key]['en-US']
  })
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
