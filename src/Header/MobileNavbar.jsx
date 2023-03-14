import { useState } from 'react'
import './MobileNavbar.css'
import { NavData } from './NavData.jsx'
import { Link } from 'react-router-dom'

export default function MobileNavbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar} >
          <li className="navbar-toggle">
            <Link to="#" className='menu-bars'>
              x
            </Link>
          </li>
          {NavData.map((cName, Route, Id, Text) => {
            return (
              <li key={Id} className={cName}>
                <Link to={Route}>
                  <span>{Text}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
