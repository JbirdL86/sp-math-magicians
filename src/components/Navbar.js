import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/calculator',
    text: 'Calculator',
  },
  {
    id: 3,
    path: '/quote',
    text: 'Quote',
  },
];

const Navbar = () => (
  <nav className="navBar">
    <Header />
    <ul className="todoList">
      {links.map((link) => (
        <li key={link.id}>
          <NavLink to={link.path} className="item" activeClassName="active-link" exact>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
