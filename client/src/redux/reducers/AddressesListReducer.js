// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function AddressesListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_ADDRESSES_SUCCESS:
      return { ...state, addresses: action.payload };
    case types.LIST_ADDRESSES_SUCCESS:
      return { ...state, listAddresses: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}