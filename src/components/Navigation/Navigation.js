import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={navData => (navData.isActive ? s.activeLink : s.link)}
      >
        Blog
      </NavLink>
      <NavLink
        to="/about"
        className={navData => (navData.isActive ? s.activeLink : s.link)}
      >
        About project
      </NavLink>
    </nav>
  );
}
