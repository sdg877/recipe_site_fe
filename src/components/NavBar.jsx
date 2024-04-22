import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar">
            <div>
                <NavLink to="/">Login/SignUp</NavLink> <br />
                <NavLink to="/recipes">Recipes</NavLink>
            </div>
        </nav>
    )
}