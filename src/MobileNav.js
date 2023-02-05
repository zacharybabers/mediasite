import React from 'react';
import './utilitycss/MobileNav.css';
import {slide as Menu} from 'react-burger-menu';

const MobileNav = () => {
    return(
        <div className='md:hidden'>
            <Menu itemListClassName = {"font-ibm font-light"}>
                <a id="life" className="menu-item" href="/life">life</a>
                <a id="writing" className="menu-item" href="/writing">writing</a>
                <a id="photo" className="menu-item" href="/photo">photo</a>
                <a id="media" className="menu-item" href="/">media</a>
                <a id="games" className="menu-item" href="/games">games</a>
                <a id="3D" className="menu-item" href="/3D">3D</a>
                <a id="about" className="menu-item" href="/about">about</a>
            </Menu>
        </div>
       
    );
}

export default MobileNav;