// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import AddressesEdit from "./pages/AddressesEdit";
import AddressesList from "./pages/AddressesList";
import ClientsEdit from "./pages/ClientsEdit";
import Manage Clients from "./pages/Manage Clients";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";
import Clients from "./pages/Clients";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="/addresseses/:id" component={ AddressesEdit }  />
              <PrivateRoute exact path="/addresseses" component={ AddressesList }  />
              <PrivateRoute exact path="/clientses/:id" component={ ClientsEdit }  />
              <PrivateRoute exact path="/manage-clients" component={ Manage Clients }  />
              <PrivateRoute exact path="/users/:id" component={ UserEdit }  />
              <PrivateRoute exact path="/users" component={ UserList }  />
              <PrivateRoute exact path="/clients" component={ Clients }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;