/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN AddressesActionsGenerated.js PLEASE EDIT ../AddressesActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import AddressesApi from "../../../api/AddressesApi";

let actionsFunction = {

  //CRUD METHODS

  // Create addresses
  createAddresses: function(addresses) {
    return function(dispatch) {
      return AddressesApi
        .createAddresses(addresses)
        .then(addresses => {
          dispatch(actionsFunction.createAddressesSuccess(addresses));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createAddressesSuccess: function(addresses) {
    return { type: types.CREATE_ADDRESSES_SUCCESS, payload: addresses };
  },


  // Delete addresses
  deleteAddresses: function(id) {
    return function(dispatch) {
      return AddressesApi
        .deleteAddresses(id)
        .then(addresses => {
          dispatch(actionsFunction.deleteAddressesSuccess(addresses));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteAddressesSuccess: function(addresses) {
    return { type: types.DELETE_ADDRESSES_SUCCESS, payload: addresses };
  },


  // Get addresses
  loadAddresses: function(id) {
    return function(dispatch) {
      return AddressesApi
        .getOneAddresses(id)
        .then(addresses => {
          dispatch(actionsFunction.loadAddressesSuccess(addresses));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadAddressesSuccess: function(addresses) {
    return { type: types.GET_ADDRESSES_SUCCESS, payload: addresses };
  },

  // Load  list
  loadAddressesList: function() {
    return function(dispatch) {
      return AddressesApi
        .getAddressesList()
        .then(list => {
          dispatch(actionsFunction.loadAddressesListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadAddressesListSuccess: function(list) {
    return { type: types.LIST_ADDRESSES_SUCCESS, payload: list };
  },

	
  // Save addresses
  saveAddresses: function(addresses) {
    return function(dispatch) {
      return AddressesApi
        .saveAddresses(addresses)
        .then(addresses => {
          dispatch(actionsFunction.saveAddressesSuccess(addresses));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveAddressesSuccess: function(addresses) {
    return { type: types.UPDATE_ADDRESSES_SUCCESS, payload: addresses };
  },


};

export default actionsFunction;
