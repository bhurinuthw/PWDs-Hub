
import React from 'react';
import ReactDOM from 'react-dom';

import 'config/firebase.config';

import App from 'app/App';
import registerServiceWorker from 'app/registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root'));

registerServiceWorker();
