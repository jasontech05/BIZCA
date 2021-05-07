// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import AddressesActions from "../redux/actions/AddressesActions";

// END IMPORT ACTIONS

/** APIs

* actionsAddresses.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsAddresses.list
*	@description CRUD ACTION list
*

**/


class AddressesList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsAddresses.loadAddressesList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsAddresses.deleteAddresses(this.state.idDelete).then(data => {
      this.props.actionsAddresses.loadAddressesList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "address_city",
        type: "string",
        label: "Address_city"
      }, 
      {
        id: "address_line_1",
        type: "string",
        label: "Address_line_1"
      }, 
      {
        id: "address_line_2",
        type: "string",
        label: "Address_line_2"
      }, 
      {
        id: "address_province",
        type: "string",
        label: "Address_province"
      }, 
      {
        id: "addresss_country_code",
        type: "string",
        label: "Addresss_country_code"
      },
    ];
    const link = "/addresseses/";

    return (
      <div>
        <h1>Addresses List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Address_city</TableCell>
              <TableCell align="right">Address_line_1</TableCell>
              <TableCell align="right">Address_line_2</TableCell>
              <TableCell align="right">Address_province</TableCell>
              <TableCell align="right">Addresss_country_code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/addresseses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.address_city }</TableCell>
                <TableCell align="right">{ row.address_line_1 }</TableCell>
                <TableCell align="right">{ row.address_line_2 }</TableCell>
                <TableCell align="right">{ row.address_province }</TableCell>
                <TableCell align="right">{ row.addresss_country_code }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/addresseses/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
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
AddressesList.propTypes = { 
  actionsAddresses: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.AddressesListReducer.listAddresses
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressesList);
