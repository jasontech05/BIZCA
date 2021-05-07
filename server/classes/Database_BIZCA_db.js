// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import AddressesModel from "../models/BIZCA_db/AddressesModel";
import ClientsModel from "../models/BIZCA_db/ClientsModel";
import UserModel from "../models/BIZCA_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.BIZCA_db_dbUrl);

    // Start Init Models

		AddressesModel.init();
		ClientsModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_BIZCA_db = await mongoose.connect(
        "mongodb://" + properties.BIZCA_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_BIZCA_db;
  }
}

export default new Database();
