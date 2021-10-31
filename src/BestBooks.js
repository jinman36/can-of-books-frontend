import React from 'react';
import axios from 'axios';
import BookCarousel from './bookCarousel';

class BestBooks extends React.Component {

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_SERVER}/allBooks`)
      .then(infoObj => infoObj.data)
      .then(data => this.setState({
        books: data,
        showItem: true
      }))
      .catch(err => console.log('error: ', err.message));
  }


  render() {

    /* TODO: render user's books in a Carousel */
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.props.books.length ? (
          <BookCarousel
            book={this.props.books}
            handleDelete={this.props.handleDelete}
            updatedForm={this.props.updatedForm}
          />
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
