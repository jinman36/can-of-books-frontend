import React from 'react';
import axios from 'axios';
import BookCarousel from './bookCarousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
      // showItem: false
    }
  }


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
    console.log(this.state)

    /* TODO: render us  er's books in a Carousel */
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <BookCarousel book={this.state.books}/>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
