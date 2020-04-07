import {useContext} from 'react'
import RichTextContext from '../../providers/RichTextProvider/RichTextContext'

export default () => {
  const richText = useContext(RichTextContext)
  return richText
}
