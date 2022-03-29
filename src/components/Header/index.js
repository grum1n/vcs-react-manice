import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../../data/Menu';
import './header.css';
import * as FaIcons from 'react-icons/fa';
import LogoImage from '../../images/logo.png';

function Header() {
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
                    <button className='menu-search-links'>
                        <FaIcons.FaSearch />
                    </button>
                    <button className='menu-button'>
                        <FaIcons.FaBars />
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;