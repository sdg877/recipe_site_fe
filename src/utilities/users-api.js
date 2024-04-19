import sendRequest from './send-request';
const BASE_URL = '/users';

export function signUp(userData) {
  return sendRequest(`${process.env.REACT_APP_BACKEND_URL}${BASE_URL}/users`, 'POST', userData);
}


export function login(credentials) {
  return sendRequest(`${process.env.REACT_APP_BACKEND_URL}${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken(){
  return sendRequest(`${process.env.REACT_APP_BACKEND_URL}${BASE_URL}/check-token`);
}

