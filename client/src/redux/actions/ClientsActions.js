import actionsFunction from "./generated/ClientsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ClientsApi from "../../api/ClientsApi";
 
 actionsFunction.loadClientsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ClientsApi
     .getClientsList()
     .then(list => {
       dispatch(actionsFunction.loadClientsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
