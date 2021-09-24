import React from 'react';
import { NavLink } from 'router-dom';
import Header from './Header';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 1,
    path: '/',
    text: 'Calculator',
  },
  {
    id: 1,
    path: '/',
    text: 'ǫuote',
  },
];

const Navbar = () => (
  <nav className="navBar">
    <Header />
    <ul>
      {links.map((link) => (
        <li key={link.key}>
          <NavLink to={link.path} activeClassName="active-link" exact>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
