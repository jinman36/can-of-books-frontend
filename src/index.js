import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.js';


import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-yu1xbbn8.us.auth0.com"
    clientId="5X38UtRHpqptOdHYJ0vpZdbV2G9MhyU1"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// export default withAuth0;

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );