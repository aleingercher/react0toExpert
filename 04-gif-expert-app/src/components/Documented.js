import React from 'react'
import PropTypes from 'prop-types'

/**
 * Some documented component
 * @component
 * @param {Object} props
 * @param {String} [props.text] texto
 * @param {number} props.size numero
 * @example
 * const size = 12
 * const text = 'I am documented!'
 * return (
 *   <Documented size={size} text={text} />
 * )
 */
const Documented = (props) => {
  const { text, size } = props
  return (
    <p style={{ fontSize: size, padding: 10, border: '1px solid #ccc'}}>{text}</p>
  )
}


export default Documented