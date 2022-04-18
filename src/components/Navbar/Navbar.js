import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
        <div className='menu-icon' onClick={handleClick}>file</div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <Link to='#' className='nav-links' onClick={closeMobileMenu}>file</Link>
            {dropdown && <Dropdown />}
          </li>
        </ul>
    </>
  );
}

export default Navbar;