import './Item.scss';
import React, { PropTypes } from 'react'

const Item = ({onClick, added, text}) => (
  <li onClick={onClick} className={(added) ? 'added' : ''}>
    {text}
  </li>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  added: PropTypes.bool,
  text: PropTypes.string.isRequired
}

export default Item
