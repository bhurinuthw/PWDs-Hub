// import config from 'config';
import { getToken } from '_helpers';
import axios from 'axios'

import { globalConstants } from '_constants'

import firebase from "firebase";


export const userService = {
  login,
  logout,
  register,
};

function login(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

function logout() {
  return axios.post(globalConstants.USER_LOGOUT_URL, null, {
    headers: {
      Authorization: "Token " + getToken(),
    }
  })
}

function register(user) {
  const { email, password } = user;
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

