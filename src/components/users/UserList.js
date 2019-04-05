import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

export default class UserList extends Component {
  render() {
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom component="h2">
          Users
        </Typography>
        <Typography component="div">
          <p>All users</p>
        </Typography>
      </React.Fragment>
    );
  }
}