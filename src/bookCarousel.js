import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

class bookCarousel extends React.Component {
  render() {
    return (
      <>
        <h2>My Favorite Books</h2>
        {this.props.book.length > 0 ?
          <Carousel className="d-block w-25">
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
