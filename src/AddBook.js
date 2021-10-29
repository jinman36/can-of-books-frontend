import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
// import axios from "axios";

class AddBook extends React.Component {

  // HandleSubmit = async (bookInfo) => {
  //   // e.preventDefault();
  //   console.log('add new book clicked')
  //   const newBookResponse = await axios.post(`${process.env.REACT_APP_SERVER}/allBooks`, bookInfo);

  //   // right now we dont have anywhere that this data is going.
  //   this.setState({
  //     newBook: newBookResponse.data
  //   })

  // }

  render() {
    return (
      <>
        <Form className='m-3' onSubmit={this.HandleSubmit}>
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
            <Form.Control as='select'>
              <option>CHECKEDIN</option>
              <option>CHECKEDOUT</option>
            </Form.Control>

          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" id='email' placeholder="Enter email" />
          </Form.Group>

          <Button variant="info" className='d-block mx-auto' type="submit" onClick={this.HandleSubmit}>
            Add New Book
          </Button>
        </Form>
      </>
    )
  }
}
export default AddBook;