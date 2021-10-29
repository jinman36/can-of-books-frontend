import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";

class LoginForm extends React.Component {
  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value)
    let user = {
      email: e.target.name.value
    }
    this.props.loginHandler(user) 
  }


    render() {
      return (
        <Form onSubmit={this.onHandleSubmit}>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" id='email' placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button variant="info" className='d-block mx-auto' type="submit" >
            Submit
          </Button>
        </Form>
      );
    };
    
}
  export default LoginForm;
