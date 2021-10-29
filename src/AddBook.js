import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
// import axios from "axios";

class AddBook extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: null,
  //     description: null,
  //     status: null,
  //     email: null
  //   }
  // }
  // HandleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('add new book clicked')
  //   // const newBookResponse = await axios.post(`${process.env.REACT_APP_SERVER}/allBooks`, bookInfo);

  //   // // right now we dont have anywhere that this data is going.
  //   // this.setState({
  //   //   newBook: newBookResponse.data
  //   // })
  //   console.log(e.target.newBook);
  //   let addedBook = {
  //     name: e.target.name.value,
  //     description: e.target.description.value,
  //     status: e.target.status.value,
  //     email: e.target.email.value,
  //   }

  //   this.setState({
  //     newBook: addedBook
  //   })
  // }

  render() {
    return (
      <>
        <Form className='m-3' onSubmit={this.props.HandleSubmit} id='newBook'>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" id='title' placeholder="Enter book title" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" id='description' placeholder="Enter book description" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Control as='select' id='status'>
              <option>CHECKEDIN</option>
              <option>CHECKEDOUT</option>
            </Form.Control>

          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" id='email' placeholder="Enter email" />
          </Form.Group>

          <Button variant="info" className='d-block mx-auto' type="submit" >
            Add New Book
          </Button>
        </Form>
      </>
    )
  }
}
export default AddBook;