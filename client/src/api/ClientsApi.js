import ClientsApiGenerated from "./generated/ClientsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ClientsApi extends ClientsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Clients List
  static getClientsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/clientss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ClientsApi;