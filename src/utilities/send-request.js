// import { getToken } from './users-service';

// export default async function sendRequest(url, method = 'GET', payload = null) {
//     const options = { method };
//     if (payload) {
//       options.headers = { 'Content-Type': 'application/json' };
//       options.body = JSON.stringify(payload);
//     }
//     const token = getToken();
//   if (token) {
//     options.headers = options.headers || {};
//     options.headers.Authorization = `Bearer ${token}`;
//   }
//     const res = await fetch(url, options);
//     if (res.ok) return res.json();
//     throw new Error('Bad Request');
//   }

export default async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method, headers: {} };
  if (payload) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(payload);
  }
  const res = await fetch(url, options);
  if (res.ok) return res.json();
  const error = await res.json();
  throw new Error(`Error: ${res.status} - ${error.message}`);
}

