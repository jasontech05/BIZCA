// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function Manage ClientsReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_CLIENTS_SUCCESS:
      return { ...state, clients: action.payload };
    case types.LIST_CLIENTS_SUCCESS:
      return { ...state, listClients: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}