import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar">
            <div>
                <NavLink to="/login">Login/SignUp</NavLink>
            </div>
        </nav>
    )
}