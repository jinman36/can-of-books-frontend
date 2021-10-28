import { Component } from 'react'
import Button from 'react-bootstrap/Button'
// import LoginForm from './LoginForm'
import Form from 'react-bootstrap/Form'

export default class LoginButton extends Component {
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


  onClick = () => {
    this.setState({ showLoginForm: true })
  }
  render() {
    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return (
      <>
        {this.state.showLoginForm ?
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
          </Form> :
          <Button onClick={this.onClick}>Login</Button>}
      </>
    )
  }
}
