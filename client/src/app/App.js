
import './index.css';

import React from 'react';

import {
  Home, Login,
  Register, ResetPassword,
  Test
} from 'pages'

import Login2 from 'pages/login2';

import { Router, Route, Switch, Redirect } from "react-router-dom";

import { Grommet } from 'grommet';
import appTheme from 'theme';

import { Provider } from 'react-redux';
import { store, history } from '_helpers';

import PrivateRoute from 'components/private_route'

const App = () => (
  <Router history={history}>
    <Provider store={store}>
      <Grommet theme={appTheme} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Switch>
          {/* <PrivateRoute path="/home" component={Home} /> */}
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset_password" component={ResetPassword} />

          {/* For dev */}
          <Route exact path="/test_component" component={Test} />
          <Route exact path="/krai_test" component={Login2} />

          {/* <Route component={NotFound} /> */}
          {/* <Redirect from="*" to="/home/my_flows" /> */}
        </Switch>
      </Grommet>
    </Provider>
  </Router >
);

export default App;