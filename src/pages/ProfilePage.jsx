import LoginForm from "../components/LoginForm.jsx"
import SignUpForm from "../components/SignUpForm.jsx"
import { useState } from "react"
import { getUser } from "../utilities/users-service.js"


export default function ProfilePage() {
const [user, setUser] = useState(getUser());
const [showLoginForm, setShowLoginForm] = useState(false);

const toggleForm = () => {
  setShowLoginForm((prevShowLoginForm) => !prevShowLoginForm);
};

const handleLogout = () => {
  localStorage.removeItem('token');
  setUser(null);
};

return (
  <main>
    {user ? (
      <div>
        <UserProfile setUser={setUser}/>
        <button type="submit" className="btn btn-primary" onClick={handleLogout}>Logout</button>
      </div>
    ) : (
      <div>
        {showLoginForm ? (
          <SignUpForm setUser={setUser} />
        ) : (
          <LoginForm setUser={setUser} />
        )}
        <button type="submit" className="btn btn-primary" onClick={toggleForm}>
          {showLoginForm ? "Have an Account? Login Instead" : "No Account? Sign Up Here" }
        </button>
      </div>
    )}
  </main>
);
}