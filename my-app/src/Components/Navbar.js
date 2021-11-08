import { NavLink } from 'react-router-dom';
import './Navbar.css'
export const Navbar = () => {
    return (
        <div id="nav-wrapper">
            <span id="logo-text">Ae</span>
      <ul id="navbar-links">
      <NavLink to="home"><li className="navbar-element">Home</li></NavLink>
      <NavLink to="resume"><li className="navbar-element">Resume</li></NavLink>
      <NavLink to="about"><li className="navbar-element">About Me</li></NavLink>
      </ul>
        </div>
    )
}
