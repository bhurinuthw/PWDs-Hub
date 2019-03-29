// import config from 'config';
import { getToken } from '_helpers';
import axios from 'axios'

import { globalConstants } from '_constants'

export const userService = {
  login,
  logout,
  register,
};

function login(username, password) {
  return axios.post(globalConstants.USER_LOGIN_URL, { username, password })
}

function logout() {
  return axios.post(globalConstants.USER_LOGOUT_URL, null, {
    headers: {
      Authorization: "Token " + getToken(),
    }
  })
}

function register(user) {
  return axios.post(globalConstants.USER_REGISTER_URL, user)
}

