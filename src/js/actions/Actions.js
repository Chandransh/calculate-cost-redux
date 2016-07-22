/**
 * Created by chandransh on 20/7/16.
 */
import * as types from '../constants/ActionTypes';

/*action creators*/
export function addItem(itemId) {
  return {
    type: types.ADD_ITEM,
    itemId
  };
}
export function removeItem(itemId) {
  return {
    type: types.REMOVE_ITEM,
    itemId
  };
}
