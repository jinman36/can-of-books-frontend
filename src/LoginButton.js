// import { Component } from 'react'
import React from "react";
import Button from 'react-bootstrap/Button'
// import LoginForm from './LoginForm'
// import Form from 'react-bootstrap/Form'
import { withAuth0 } from '@auth0/auth0-react';

class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false
    }
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.email.value)
    let user = {
      email: e.target.email.value
    }
    this.props.loginHandler(user)
  }


  // onClick = () => {
  //   // this.setState({ showLoginForm: true });
  //   this.props.auth0.loginWithRedirect();
  // }
  render() {
    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return (
      <>
        {/* {this.state.showLoginForm ?
          <Form onSubmit={this.onHandleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" id='email' placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
          // </Form> : */}
        <Button
          onClick={() => { this.props.auth0.loginWithRedirect() }}>Login</Button>
      </>
    )
  }
}

export default withAuth0(LoginButton);