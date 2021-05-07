import ClientsModelGenerated from "./generated/ClientsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ClientsModelGenerated.init();
  
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
      return await ClientsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ClientsModelGenerated,
  ...customModel
};
