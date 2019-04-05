import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated
      ? <Component {...props} />
      : <Redirect to={{
        pathname: "/login",
        state: { from: props.location }}}/>
  )} />
);

PrivateRoute.propTypes = {
  component: PropTypes.any,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => {
  return { isAuthenticated: state.user.isAuthenticated };
};

export default connect(mapStateToProps)(PrivateRoute);