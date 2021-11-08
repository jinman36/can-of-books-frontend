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
import UpdateBook from './UpdateBook.js'
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
      newBook: {},
      books: [],
      upDatedObject: {},
      showUpdatedForm: false
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
    // console.log('bookId', bookId);
    let URL = `${process.env.REACT_APP_SERVER}/allBooks`;
    const deletedBook = await axios.delete(`${URL}/${bookId}`);
    console.log(deletedBook);

    let copyState = this.state.books;
    let filteredArr = copyState.filter((item) => item._id !== bookId);

    // need to have state for books array in app.js
    this.setState({ books: filteredArr });
  }

  HandleSubmit = async (e) => {
    e.preventDefault();
    console.log('add new book clicked')
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
    // .catch(err => console.log(`Error: ${err.message}`))
  }

  async componentDidMount() {
    // let getIdToken = await this.props.auth0.getIdTokenClaims();
    // let jwt = getIdToken.__raw;
    // let config = {
    //   headers: { "Authorization": `Bearer ${jwt}` }
    // };
    // axios.get(`${process.env.REACT_APP_SERVER}/allBooks`, config)

    axios.get(`${process.env.REACT_APP_SERVER}/allBooks`)
      .then(infoObj => infoObj.data)
      .then(data => this.setState({
        books: data,
        showItem: true
      }))
      .catch(err => console.log('error: ', err.message));
  }

  updatedForm = (itemObj) => {
    this.setState({ upDatedObject: itemObj, showUpdatedForm: true });
  }

  handleUpdate = async (itemObj) => {

    let URL = `${process.env.REACT_APP_SERVER}/allBooks/${itemObj._id}`
    console.log(`URL in handle update: ${URL}`)

    let putObj = {
      title: itemObj.title,
      description: itemObj.description,
      status: itemObj.status,
      email: itemObj.email
    }

    console.log('put Obj', putObj)
    let putReq = await axios.put(URL, putObj);
    let putData = putReq.data;


    let copyState = this.state.books.map((book, idx) => {
      if (book._id === putData._id) return putData;
      else { return book }
    })
    this.setState({ books: copyState, showUpdatedForm: false })
  }


  render() {
    console.log(this.props);
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {this.state.user ? <BestBooks
                handleDelete={this.handleDelete}
                books={this.state.books}
                updatedForm={this.updatedForm}
              />
                : <LoginButton
                  loginHandler={this.loginHandler} />
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
          {this.state.showUpdatedForm ?
            <UpdateBook
              handleUpdate={this.handleUpdate}
              item={this.state.upDatedObject}
              books={this.state.books} /> : ''}
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
