import AddressesApiGenerated from "./generated/AddressesApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class AddressesApi extends AddressesApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Addresses List
  static getAddressesList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/addressess")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default AddressesApi;