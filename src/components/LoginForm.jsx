import { useState } from 'react';
import * as usersService from '../utilities/users-service.js';


export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  // async function handleSubmit(evt) {
  //   evt.preventDefault();
  //   try {
  //     const user = await usersService.login(credentials);
  //     setUser(user);
  //   } catch {
  //     setError('Log In Failed - Try Again');
  //   }
  // }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      // Stringify the token before storing it in local storage
      localStorage.setItem('token', JSON.stringify(user.token));
      // Set the user in the state or perform any other action
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }
  

  return (
    <div className="container-mt-5">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="mb-3 row justify-content-center">
          <div className="col-sm-8"> 
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <div className="col-sm-8"> 
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <div className="col-sm-8-custom"> 
            <button type="submit" className="btn btn-primary">LOG IN</button>
          </div>
        </div>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}