// import sendRequest from './send-request';

// export function signUp(userData) {
//   return sendRequest(`${process.env.REACT_APP_BACKEND_URL}/api/users`, 'POST', userData);
// }


// export function login(credentials) {
//   return sendRequest(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`, 'POST', credentials);
// }

// export function checkToken(){
//   return sendRequest(`${process.env.REACT_APP_BACKEND_URL}/check-token`);
// }

import API_BASE_URL from './config';
import sendRequest from './send-request';

export function signUp(userData) {
  return sendRequest(`${API_BASE_URL}/api/users`, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${API_BASE_URL}/api/users/login`, 'POST', credentials);
}

export function checkToken() {
  return sendRequest(`${API_BASE_URL}/check-token`);
}
