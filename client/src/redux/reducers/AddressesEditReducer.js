// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  addresses: {}
};

// Reducer
export default function AddressesEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ADDRESSES_SUCCESS:
      return { ...state, addresses: action.payload };
    case types.UPDATE_ADDRESSES_SUCCESS:
      return { ...state, addresses: action.payload };
    case types.GET_ADDRESSES_SUCCESS:
      return { ...state, addresses: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}