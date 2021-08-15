import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

// TODO: wrap everything in Auth0
ReactDOM.render(
  <React.StrictMode>
     <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOAMIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENTID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);
