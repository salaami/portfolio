import React, {useState} from 'react';
import * as Vsc from "react-icons/vsc"; 
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons'
//import { BurgerMenu } from '/src/assets/icons/burger-menu.svg'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: '#FFFFFF'}}>
          <div className="navbar">
              <Link to="#" className='menu-bars'>
                <Vsc.VscMenu onClick={showSidebar} />
              </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items' onClick={showSidebar} >
                <li className="navbar-toggle">
                    <Link to="#" className='menu-bars'>
                        <Vsc.VscChromeClose />
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
              </ul>
          </nav>
          </IconContext.Provider>
        </>
    );
}

export default Navbar
