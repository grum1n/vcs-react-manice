import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../../data/Menu';
import './header.css';
import * as FaIcons from 'react-icons/fa';
import LogoImage from '../../images/logo.png';

function Header() {
    const [menu, setMenu] = useState(false);
    const [searchButton, setSearchButton] = useState(false);

    const showMobileMenu = () => setMenu(!menu);
    const showSearchButton = () => setSearchButton(!searchButton);
    const closeMobileMenu = () => setMenu(false);


    return (
        <header>
            <nav className='header-navigation'>
                <Link to='/'>
                    <img src={LogoImage} alt='Manice' className='header-logo-img'/>
                </Link>
                <div className='flex-container'>
                    <ul className='navigation-links'>
                        {Menu.map((item, index) => {
                            return (
                                <li key={index} className='menu-links-box'>
                                    <Link to={item.path} className={item.cName}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <button className='menu-search-links' onClick={showSearchButton}>
                        {searchButton ? <FaIcons.FaSearchPlus style={{ color: 'var(--green)'}}/> : <FaIcons.FaSearch />}
                    </button>
                    <button className='menu-button' onClick={showMobileMenu}>
                        {menu ? <FaIcons.FaTimes style={{ color: 'var(--green)'}}/> : <FaIcons.FaBars />}
                    </button>
                </div>
            </nav>
            <nav className={menu ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className='mobile-menu-item' onClick={showMobileMenu}>
                    {Menu.map((item, index) => {
                    return (
                        <li key={index} className='mobile-menu-links-box'>
                            <Link to={item.path} onClick={closeMobileMenu} className='mobile-links-space'>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Header;