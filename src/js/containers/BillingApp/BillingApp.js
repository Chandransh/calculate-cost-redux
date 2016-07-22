import './BillingApp.scss';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../actions/Actions'
import {Form} from '../../components';

class BillingApp extends Component {
  static propTypes = {
    itemList: PropTypes.object.isRequired,
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
  };

  render () {
    const {itemList, addItem, removeItem} = this.props;
    return (
      <div className="container">
        <h1>Calculate Billing Amount</h1>
        <Form itemList={itemList} addItem={addItem} removeItem={removeItem}/>
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
  return bindActionCreators(Actions, dispatch)
  ;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingApp);
