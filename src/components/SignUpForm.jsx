import React, { useState } from 'react';
import { signUp } from '../utilities/users-service';

export default function SignUpForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  });

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await signUp(formData);
      props.setUser(user);
    } catch {
      setFormData({ ...formData, error: 'Sign Up Failed - Try Again' });
    }
  };

  const disable = formData.password !== formData.confirm;

  return (
    <div>
      <div className="container-mt-5">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="mb-3 row justify-content-center">
            <div className="col-sm-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3 row justify-content-center">
            <div className="col-sm-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3 row justify-content-center">
            <div className="col-sm-6">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3 row justify-content-center">
            <div className="col-sm-6">
              <label htmlFor="confirm" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirm"
                name="confirm"
                value={formData.confirm}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3 row justify-content-center">
            <div className="col-sm-6">
              <button type="submit" className="btn btn-primary" disabled={disable}>SIGN UP</button>
            </div>
          </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  );
}

