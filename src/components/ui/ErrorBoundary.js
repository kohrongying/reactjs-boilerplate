import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

    static propTypes = {
      children: PropTypes.any
    };

    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }

    render() {
      if (this.state.errorInfo) {
        return (
          <React.Fragment>
            <Typography variant="h4" gutterBottom component="h2">
          Something went wrong
            </Typography>
            <Typography component="div">
              <details style={{ whiteSpace: "pre-wrap" }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </details>
            </Typography>
          </React.Fragment>
        );
      }
      // Render children if there's no error
      return this.props.children;
    }
}

export default ErrorBoundary;