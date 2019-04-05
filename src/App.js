import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import UserList from "./components/users/UserList";
import CompanyList from "./components/companies/CompanyList";
import DefaultLayout from "./components/ui/DefaultLayout";
import PrivateRoute from "./components/auth/PrivateRoute";

const styles = () => ({
  root: {
    display: "flex",
  },
});

class App extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Switch>
          <Route exact path="/login" component={Login} />
          <DefaultLayout>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute exact path="/users" component={UserList} />
              <PrivateRoute exact path="/companies" component={CompanyList} />
            </Switch>
          </DefaultLayout>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);