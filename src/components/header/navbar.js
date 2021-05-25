/** @format */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <NavLink
              exact
              to='/'
              activeClassName='active'
              className='nav-links'
              onClick={handleClick}>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              to='/about'
              activeClassName='active'
              className='nav-links'
              onClick={handleClick}>
              About
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              to='/blog'
              activeClassName='active'
              className='nav-links'
              onClick={handleClick}>
              Blog
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              to='/contact'
              activeClassName='active'
              className='nav-links'
              onClick={handleClick}>
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className='nav-icon' onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
