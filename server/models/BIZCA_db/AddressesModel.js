import AddressesModelGenerated from "./generated/AddressesModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = AddressesModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await AddressesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AddressesModelGenerated,
  ...customModel
};
