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
 *  TO CUSTOMIZE FUNCTIONS IN ClientsActionsGenerated.js PLEASE EDIT ../ClientsActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import ClientsApi from "../../../api/ClientsApi";

let actionsFunction = {

  //CRUD METHODS

  // Create clients
  createClients: function(clients) {
    return function(dispatch) {
      return ClientsApi
        .createClients(clients)
        .then(clients => {
          dispatch(actionsFunction.createClientsSuccess(clients));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createClientsSuccess: function(clients) {
    return { type: types.CREATE_CLIENTS_SUCCESS, payload: clients };
  },


  // Delete clients
  deleteClients: function(id) {
    return function(dispatch) {
      return ClientsApi
        .deleteClients(id)
        .then(clients => {
          dispatch(actionsFunction.deleteClientsSuccess(clients));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteClientsSuccess: function(clients) {
    return { type: types.DELETE_CLIENTS_SUCCESS, payload: clients };
  },


  // Find by userid
  findByuserid: function(key) {
    return function(dispatch) {
      return ClientsApi
        .findByuserid(key)
        .then(item => {
          dispatch(actionsFunction.findByuseridSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByuseridSuccess: function(item) {
    return { type: types.FINDBYUSERID_CLIENTS_SUCCESS, payload: item };
  },


  // Get clients
  loadClients: function(id) {
    return function(dispatch) {
      return ClientsApi
        .getOneClients(id)
        .then(clients => {
          dispatch(actionsFunction.loadClientsSuccess(clients));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadClientsSuccess: function(clients) {
    return { type: types.GET_CLIENTS_SUCCESS, payload: clients };
  },

  // Load  list
  loadClientsList: function() {
    return function(dispatch) {
      return ClientsApi
        .getClientsList()
        .then(list => {
          dispatch(actionsFunction.loadClientsListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadClientsListSuccess: function(list) {
    return { type: types.LIST_CLIENTS_SUCCESS, payload: list };
  },

	
  // Save clients
  saveClients: function(clients) {
    return function(dispatch) {
      return ClientsApi
        .saveClients(clients)
        .then(clients => {
          dispatch(actionsFunction.saveClientsSuccess(clients));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveClientsSuccess: function(clients) {
    return { type: types.UPDATE_CLIENTS_SUCCESS, payload: clients };
  },


};

export default actionsFunction;
