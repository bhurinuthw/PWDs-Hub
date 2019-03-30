import { userConstants } from '_constants';
import { userService } from 'services';
import { alertActions } from './';
import { history } from '_helpers';

import firebase from 'firebase';

export const userActions = {
  login,
  logout,
  register,
  getAll,
  deleteUser
};

function login(email, password) {
  return dispatch => {
    dispatch(request({ email }));

    userService.login(email, password).catch(err => {
      console.log(err);
    })

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        dispatch(success(user));
        user = JSON.stringify(user);
        localStorage.setItem('user', user);
        history.push('/test_component');
      } else {
        // No user is signed in.
      }
    });



    // userService.login(email, password)
    //   .then(
    //     res => {
    //       console.log(res);
    //       let user = res.data;
    //       dispatch(success(user));
    //       user = JSON.stringify(user);
    //       localStorage.setItem('user', user);
    //       history.push('/test_component');
    //     },
    //     error => {
    //       dispatch(failure(error.toString()));
    //       dispatch(alertActions.error(error.toString()));
    //     }
    //   );

    // Fake login
    // setTimeout(() => {
    //   const token = 1234788989
    //   localStorage.setItem('user', token);
    //   dispatch(success(token));
    //   history.push('/home/my_flows');
    // }, 500)

  };

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
  userService.logout().then((res) => {
    localStorage.removeItem('user');
    history.push('/login');
  }).catch(err => { console.error(err); localStorage.removeItem('user'); history.push('/login') });

  return { type: userConstants.LOGOUT };
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    userService.register(user)
      .then(
        user => {

          console.log(user);
          dispatch(success(user));
          history.push('/login');
          dispatch(alertActions.success('Registration successful'));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
  return dispatch => {
    dispatch(request());

    userService.getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: userConstants.GETALL_REQUEST } }
  function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
  function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function deleteUser(id) {
  return dispatch => {
    dispatch(request(id));

    userService.delete(id)
      .then(
        user => dispatch(success(id)),
        error => dispatch(failure(id, error.toString()))
      );
  };

  function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
  function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
  function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}