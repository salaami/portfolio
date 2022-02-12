import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { TiSocialLinkedin } from 'react-icons/ti'; 

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
          <div className="navbar">
            <Link to="#" className='menu-bars'>            
                <ul onClick={showSidebar} className="text-icons">=</ul> 
                <div>
                    <li className="social-icons">
                        <TiSocialLinkedin />
                    </li>
                </div>


            </Link> 
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items' onClick={showSidebar}>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
              </ul>
          </nav>
        </>
    );
}

export default Navbar
