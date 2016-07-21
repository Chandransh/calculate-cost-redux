import './Form.scss';
import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'
import Item from '../Item/Item';
export const fields = ['ocupation']

class Form extends Component {
  render() {
    const {
      fields: {ocupation},
      addItem,
      itemList
      } = this.props

    var listItems = itemList.allItems.map(function(item) {
      let added = itemList.billedItems.filter(i => i.id == item.id).length > 0;
      return (<Item key={item.id} onClick={() => {addItem(item.id)}} text={item.name} added={added}/>);
    });

    var billedItems = this.props.itemList.billedItems;
    var itemCost = 0;
    var discount = 0;

    function fixDecimalPlaces(value) { //to 2 decimal places, can be extended easily
        return Number(Math.round(value+'e2')+'e-2');
    }

    billedItems.forEach(function(item) {
      itemCost = itemCost + item.price;
      discount = (item.type == 'grocery') ? fixDecimalPlaces(0.05*itemCost) : discount;
    });

    //for discount based on user type
    switch (itemList.userType) {
      case "employee":
        discount = discount + fixDecimalPlaces(0.30*itemCost);
        break;
      case "associate":
        discount = discount + fixDecimalPlaces(0.10*itemCost);
        break;
      default :

    }

    return (
      <section>
        <form onSubmit={(e) => e.preventDefault()}>
          <h4>Add Items to Calculate Billing</h4>
          <div>
            <div>
              <ul>
                {listItems}
              </ul>
            </div>
          </div>
          <div>
            <label><strong>I am</strong></label>
            <div>
              <label>
                <input type="radio" {...ocupation} value="employee" checked={ocupation.value === 'employee'}/> an Employee of the store
              </label>
              <label>
                <input type="radio" {...ocupation} value="associate" checked={ocupation.value === 'associate'}/> an Associate of the store
              </label>
              <label>
                <input type="radio" {...ocupation} value="none" checked={ocupation.value === 'none'}/> none
              </label>
            </div>
          </div>
        </form>
        <div className="price_box">
          <h4>Total Cost</h4>
          <ul>
            <li>
              <span>Item Cost</span>
              <span>&#8377; {fixDecimalPlaces(itemCost)}</span>
            </li>
            <li>
              <span>Discount</span>
              <span>&#8377; {fixDecimalPlaces(discount)}</span>
            </li>
            <li>
              <span>Sub Total</span>
              <span>&#8377; {fixDecimalPlaces(itemCost - discount)}</span>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

Form.propTypes = {
  fields: PropTypes.object.isRequired
}

export default reduxForm({
  form: 'simple',
  fields
})(Form)
