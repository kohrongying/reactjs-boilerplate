import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

export default class CompanyList extends Component {
  render() {
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom component="h2">
          Companies
        </Typography>
        <Typography component="div">
          <p>All companies</p>
        </Typography>
      </React.Fragment>
    );
  }
}