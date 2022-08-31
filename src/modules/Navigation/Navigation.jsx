import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const isActive = ({ isActive }) => {
  return isActive ? s.active : '';
};

export default function Navigation() {
  return (
    <>
      <nav>
        <NavLink to="/" className={isActive}>
          Home
        </NavLink>
        <NavLink to="/movies" className={isActive}>
          Movies
        </NavLink>
      </nav>
    </>
  );
}
