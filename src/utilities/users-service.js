import * as usersAPI from './users-api';

export async function signUp(userData) {
  try {
    const response = await usersAPI.signUp(userData);
    const { user, token } = response;

    localStorage.setItem('token', token);
    console.log('Token stored:', token);

    localStorage.setItem('user', JSON.stringify(user));

    return getUser();
  } catch (error) {
    console.error('Sign-up failed:', error);
    throw error;
  }
}

export async function login(userData) {
  try {
    const token = await usersAPI.login(userData);
    localStorage.setItem('token', token);
    return getUser();
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}

export function logOut() {
  localStorage.removeItem('token');
}

export function getToken() {
  console.log('Getting token...');
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
      throw new Error('Invalid token format');
    }

    const payload = JSON.parse(atob(tokenParts[1]));
    console.log('Decoded payload:', payload);

    if (payload.exp * 1000 < Date.now()) {
      console.error('Token has expired');
      localStorage.removeItem('token');
      return null;
    }

    return token;
  } catch (error) {
    console.error('Error processing token:', error);
    localStorage.removeItem('token');
    return null;
  }
}

export function getUser() {
  console.log('Getting user...');
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export async function checkToken() {
  return await usersAPI.checkToken().then(dateStr => new Date(dateStr));
}
