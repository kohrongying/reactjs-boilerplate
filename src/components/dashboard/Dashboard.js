import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

class Dashboard extends Component {
  render() {

    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom component="h2">
          Dashboard
        </Typography>
        <Typography component="div">
          <p>Get info here</p>
        </Typography>
      </React.Fragment>
    );
  }
}

export default Dashboard;