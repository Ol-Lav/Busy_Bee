import { NavLink } from "react-router-dom";
import beehive from '../../images/beehive.png';
import './Navigation.scss';

export const Navigation = () => {
  return (
    <nav className="nav">
      <img
        src={beehive}
        alt="Beehive"
        className="nav_logo"
      />
      <NavLink
        to="/"
        className="nav_link"
      >
        Home
      </NavLink>
      <NavLink
        to="/weather"
        className="nav_link"
      >
        Weather
      </NavLink>
      <NavLink
        to="/quote"
        className="nav_link"
      >
        Quote
      </NavLink>
      <NavLink
        to="/calculator"
        className="nav_link"
      >
        Calculator
      </NavLink>
    </nav>
  )
}
