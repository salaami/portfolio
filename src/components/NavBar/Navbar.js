import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from '../SidebarData'
import './Navbar.css'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="navbar">
                <Link to="#" className='menu-icon'>            
                    <ul onClick={showSidebar}>menu</ul> 
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
