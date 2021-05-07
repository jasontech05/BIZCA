import { combineReducers } from "redux";

// START IMPORT REDUCERS
import AddressesEditReducer from "./AddressesEditReducer";
import AddressesListReducer from "./AddressesListReducer";
import ClientsEditReducer from "./ClientsEditReducer";
import HomeReducer from "./HomeReducer";
import Manage ClientsReducer from "./Manage ClientsReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";
import ClientsReducer from "./ClientsReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	AddressesEditReducer,
	AddressesListReducer,
	ClientsEditReducer,
	HomeReducer,
	Manage ClientsReducer,
	UserEditReducer,
	UserListReducer,
	ClientsReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
