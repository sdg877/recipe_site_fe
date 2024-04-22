import { getToken } from "./users-service"

export default async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc. 
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }

    const token = getToken()
    if (token) {
        options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`
    }
    
    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
  }

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

// // import { getToken } from './users-service';

// // export default async function sendRequest(url, method = 'GET', payload = null) {
// //   const options = { method };
// //   if (payload) {
// //     options.headers = { 'Content-Type': 'application/json' };
// //     options.body = JSON.stringify(payload);
// //   }
  
// //   const token = getToken();
// //   if (token) {
// //     options.headers = options.headers || {};
// //     options.headers.Authorization = `Bearer ${token}`;
// //   }
  
// //   const res = await fetch(url, options);

// //   if (res.ok) {
// //     return res.json();
// //   } else {
// //     let errorMessage = 'An error occurred while processing your request.';
// //     // Customize error message based on status code
// //     if (res.status === 400) {
// //       errorMessage = 'Bad request. Please check your input data.';
// //     } else if (res.status === 401) {
// //       errorMessage = 'Unauthorized. Please log in again.';
// //     } else if (res.status === 404) {
// //       errorMessage = 'Resource not found.';
// //     }
// //     throw new Error(errorMessage);
// //   }
// // }
