import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { TiSocialLinkedin } from 'react-icons/ti'; 
import { TiSocialGithub } from 'react-icons/ti'; 
import { TiSocialTwitter} from 'react-icons/ti'; 
import { CgMail, CgUiKit } from 'react-icons/cg'; 

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="navbar">
                <ul className='menu-icon'>
                    <a onClick={showSidebar} className="text-icons">=</a> 
                </ul>
                <div className="social-bar">
                    <a href="mailto:salemsalleh@gmail.com" target="_blank" className="social-icon">
                        <CgMail />
                    </a>
                    <a href="https://github.com/salaami" target="_blank" className="social-icon">
                        <TiSocialGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/salem-salleh-1a4828a8" target="_blank" className="social-icon">
                        <TiSocialLinkedin />
                    </a>
                    <a href="https://twitter.com/Salamialaikum" target="_blank" className="social-icon">
                        <TiSocialTwitter />
                    </a>
                </div>
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
