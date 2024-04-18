import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import LoginPage from "./components/LoginPage.jsx"
import SignUpForm from './components/SignUpForm.jsx';
import LoginForm from './components/LoginForm.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <SignUpForm />
    <LoginForm />
    
  </React.StrictMode>
);

