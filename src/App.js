import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks';
import Profile from './Profile';
import LoginButton from './LoginButton'
import AddBook from './AddBook';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: false,
      newBook: {},
      books: []
    }
  }


  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  // Lab 12 add in - function is passed down as state into BestBooks
  handleDelete = async (bookId) => {
    console.log('bookId', bookId);
    let URL = `${process.env.REACT_APP_SERVER}/allBooks`;
    const deletedBook = await axios.delete(`${URL}/${bookId}`);
    console.log(deletedBook);

    let copyState = this.state.books;
    let filteredArr = copyState.filter((item) => item._id !== bookId);

    // need to have state for books array in app.js
    this.setState({ books: filteredArr });
  }

  // Post Not yet functional
  handleUpdate = async (email) => {
    const newBookResponse = await axios.post(`${process.env.REACT_APP_SERVER}/allBooks`);
    this.setState({
      newBook: newBookResponse.data
    })
  };

  HandleSubmit = async (e) => {
    e.preventDefault();
    console.log('add new book clicked')
    // const newBookResponse = await axios.post(`${process.env.REACT_APP_SERVER}/allBooks`, bookInfo);

    // // right now we dont have anywhere that this data is going.
    // this.setState({
    //   newBook: newBookResponse.data
    // })
    let addedBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: e.target.email.value,
    }
    let URL = `${process.env.REACT_APP_SERVER}/allBooks`
    let postRes = await axios.post(URL, addedBook)

    this.setState({
      books: [...this.state.books, postRes.data]
    })
  }

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
    // console.log(this.state.new)
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {this.state.user ? <BestBooks handleDelete={this.handleDelete} books={this.state.books} /> : <LoginButton loginHandler={this.loginHandler} />
              }
            </Route>
            <Route exact path="/profile">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              <Profile user={this.state.user} />
            </Route>
            <Route exact path="/create">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              <AddBook HandleSubmit={this.HandleSubmit} />
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
