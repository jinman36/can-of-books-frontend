import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
class bookCarousel extends React.Component {
  render() {

    return (
      <>
        <h2>My Favorite Books</h2>
        {this.props.book.length > 0 ?
          <Carousel className="d-block mx-auto w-25 m-4 border border-info">
            {this.props.book.map((book) => (
              <Carousel.Item key={book._id}>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/25"
                  alt={book.title}
                />
                <Carousel.Caption>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                </Carousel.Caption>
                <Button variant="danger" className='d-block mx-auto' type="submit" onClick={() => { this.props.handleDelete(book._id); }}>
                  DELETE
                </Button>
              </Carousel.Item>

            ))}
          </Carousel>
          : <p>Sorry, no books available.</p>
        }
      </>

    )
  }
}

export default bookCarousel;
