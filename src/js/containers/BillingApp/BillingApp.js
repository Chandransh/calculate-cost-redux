import './BillingApp.scss';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {addItem} from '../../actions/Actions'
import {Form} from '../../components';

class BillingApp extends Component {
  static propTypes = {
    itemList: PropTypes.object.isRequired,
    addItem: PropTypes.func.isRequired
  };

  render () {
    const {itemList, addItem} = this.props;
    return (
      <div className="container">
        <h1>Calculate Billing Amount</h1>
        <Form itemList={itemList} addItem={addItem}/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    itemList: state.itemList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (itemId) => {
      dispatch(addItem(itemId))
    }
    //bindActionCreators(CalculateActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingApp);
