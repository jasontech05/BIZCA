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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import ClientsActions from "../redux/actions/ClientsActions";

// END IMPORT ACTIONS

/** APIs

* actionsClients.create
*	@description CRUD ACTION create
*
* actionsClients.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsClients.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsUser.list
*	@description CRUD ACTION list
*
* actionsClients.list
*	@description CRUD ACTION list
*

**/

class ClientsEdit extends Component {
  // Init clients
  constructor(props) {
    super(props);
    this.state = {
      clients: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsClients.loadClients(this.props.match.params.id);
    }
    
    this.props.actionsClients.loadClientsList();
    this.props.actionsUser.loadUserList();
  }

  // Insert props clients in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      clients: props.clients
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.clients._id) {
      this.props.actionsClients.saveClients(this.state.clients).then(data => {
        this.props.history.push("/manage-clients/");
      });
    } else {
      this.props.actionsClients.createClients(this.state.clients).then(data => {
        this.props.history.push("/manage-clients/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Clients Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="curreny_code"
            label="Curreny_code"
            value={this.state.clients.curreny_code || ""}
            onChange={Utils.handleChange.bind(this, "clients")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.clients.name || ""}
            onChange={Utils.handleChange.bind(this, "clients")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m client_address with Clients */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="client_address">
              Client_address
            </InputLabel>
            <Select
              value={this.state.clients.client_address || ""}
              onChange={Utils.handleChangeSelect.bind(this, "clients")}
              inputProps={{
                id: "client_address",
                name: "client_address"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listClients && this.props.listClients.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m userid with User */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="userid">
              Userid
            </InputLabel>
            <Select
              value={this.state.clients.userid || ""}
              onChange={Utils.handleChangeSelect.bind(this, "clients")}
              inputProps={{
                id: "userid",
                name: "userid"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listUser && this.props.listUser.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/manage-clients/">Back to list</Link>

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
    actionsClients: bindActionCreators(ClientsActions, dispatch),
  };
};

// Validate types
ClientsEdit.propTypes = { 
  actionsClients: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    clients: state.ClientsEditReducer.clients,
    listClients: state.ClientsEditReducer.listClients,
    listUser: state.ClientsEditReducer.listUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientsEdit);
