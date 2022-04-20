import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
      setDropdown(true);
  };

  const onMouseLeave = () => {
      setDropdown(false);
  };

  return (
    <>
      <div className='menu-icon'>file</div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
          <Link to='#' className='nav-links'>file</Link>
          {dropdown && <Dropdown />}
        </li>
      </ul>
    </>
  );
}

export default Navbar;