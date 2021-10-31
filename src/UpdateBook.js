import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";


class UpdateBook extends React.Component {

  handleUpdateSubmit = (e) => {
    e.preventDefault();
    console.log('add updated clicked')

    let newObj = {
      title: (e.target.title.value) ? e.target.title.value : this.props.item.title,
      description: (e.target.description.value) ? e.target.description.value : this.props.item.description,
      status: (e.target.status.value) ? e.target.status.value : this.props.item.status,
      email: (e.target.email.value) ? e.target.email.value : this.props.item.email,
      _id: this.props.item._id
    }
    this.props.handleUpdate(newObj)
  }

  render() {
    return (
      <>
        <h1>Update Book Information</h1>
        <Form className='m-3' onSubmit={this.handleUpdateSubmit} id='newBook'>
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
            Update Book
          </Button>
        </Form>
      </>
    )
  }
}
export default UpdateBook;