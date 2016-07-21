/**
 * Created by chandransh on 20/7/16.
 */
import * as types from '../constants/ActionTypes';

export function addItem(itemId) { /*action creator*/
  return {
    type: types.ADD_ITEM,
    itemId
  };
}
