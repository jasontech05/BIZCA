// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  clients: {}
};

// Reducer
export default function ClientsEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_CLIENTS_SUCCESS:
      return { ...state, clients: action.payload };
    case types.UPDATE_CLIENTS_SUCCESS:
      return { ...state, clients: action.payload };
    case types.GET_CLIENTS_SUCCESS:
      return { ...state, clients: action.payload };
    case types.LIST_USER_SUCCESS:
      return { ...state, listUser: action.payload };
    case types.LIST_CLIENTS_SUCCESS:
      return { ...state, listClients: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}