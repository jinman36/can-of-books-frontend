import { Component } from "react";
import { Button } from "react-bootstrap";
import { withAuth0 } from '@auth0/auth0-react';

class LogoutButton extends Component {

  render() {
    return (
      // <Button onClick={this.props.onLogout}>
      <Button onClick={() => this.props.auth0.logout({ returnTo: window.location.origin })}>
        Log Out
      </Button>
    );
  }
};

export default withAuth0(LogoutButton);
