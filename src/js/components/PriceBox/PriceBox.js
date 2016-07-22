import './PriceBox.scss';
import React, {PropTypes} from 'react'

const PriceBox = ({itemCost,discount}) => (
  <div className="price_box">
    <h4>Total Cost</h4>
    <ul>
      <li>
        <span>Item Cost</span>
        <span>&#8377; {itemCost}</span>
      </li>
      <li>
        <span>Discount</span>
        <span>&#8377; {discount}</span>
      </li>
      <li>
        <span>Sub Total</span>
        <span>&#8377; {itemCost - discount}</span>
      </li>
    </ul>
  </div>
)

PriceBox.propTypes = {
  itemCost: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired
}

export default PriceBox
