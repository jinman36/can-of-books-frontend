import { Component } from "react";
import LoginForm from './LoginForm'

class Profile extends Component {

  render() {
        console.log(this.props.user.email)
    return (
      <>
      {/* {this.props.user.email} */}
      <h1>User : {this.props.user.email}</h1>
        {/* <LoginForm /> */}
      </>
    )
  }
};

export default Profile;
