// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import AddressesActions from "../redux/actions/AddressesActions";

// END IMPORT ACTIONS

/** APIs

* actionsAddresses.create
*	@description CRUD ACTION create
*
* actionsAddresses.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsAddresses.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class AddressesEdit extends Component {
  // Init addresses
  constructor(props) {
    super(props);
    this.state = {
      addresses: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsAddresses.loadAddresses(this.props.match.params.id);
    }
    
  }

  // Insert props addresses in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      addresses: props.addresses
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.addresses._id) {
      this.props.actionsAddresses.saveAddresses(this.state.addresses).then(data => {
        this.props.history.push("/addresseses/");
      });
    } else {
      this.props.actionsAddresses.createAddresses(this.state.addresses).then(data => {
        this.props.history.push("/addresseses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Addresses Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="address_city"
            label="Address_city"
            value={this.state.addresses.address_city || ""}
            onChange={Utils.handleChange.bind(this, "addresses")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="address_line_1"
            label="Address_line_1"
            value={this.state.addresses.address_line_1 || ""}
            onChange={Utils.handleChange.bind(this, "addresses")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="address_line_2"
            label="Address_line_2"
            value={this.state.addresses.address_line_2 || ""}
            onChange={Utils.handleChange.bind(this, "addresses")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="address_province"
            label="Address_province"
            value={this.state.addresses.address_province || ""}
            onChange={Utils.handleChange.bind(this, "addresses")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="addresss_country_code"
            label="Addresss_country_code"
            value={this.state.addresses.addresss_country_code || ""}
            onChange={Utils.handleChange.bind(this, "addresses")}
            margin="normal"
            fullWidth
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/addresseses/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsAddresses: bindActionCreators(AddressesActions, dispatch),
  };
};

// Validate types
AddressesEdit.propTypes = { 
  actionsAddresses: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    addresses: state.AddressesEditReducer.addresses
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressesEdit);
