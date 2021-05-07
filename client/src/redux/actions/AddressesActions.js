import actionsFunction from "./generated/AddressesActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import AddressesApi from "../../api/AddressesApi";
 
 actionsFunction.loadAddressesList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return AddressesApi
     .getAddressesList()
     .then(list => {
       dispatch(actionsFunction.loadAddressesSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
