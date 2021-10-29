import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";

class AddBook extends React.Component {

  HandleSubmit = (e) => {
    e.preventDefault();
    console.log('add new book clicked')
 
  }

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

          <Button variant="info" className='d-block mx-auto' type="submit" >
            Add New Book
          </Button>
        </Form>
      </>
    )
  }
}
export default AddBook;