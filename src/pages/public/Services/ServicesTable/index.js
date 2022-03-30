import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './services.css';

function ServicesTable() {
    return (
        <ul className='container services-flex-container'>
            <li className='services-box'>
                <div>
                    <FaIcons.FaChartLine className='services-box-icon' />
                </div>
                <div className='flex-col'>
                    <h4 className='services-box-h4'>Financial Analysis</h4>
                    <p className='services-box-p'>
                        Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.
                    </p>
                    <Link to='/' className='services-box-link'>
                        Read More
                    </Link>
                </div>
            </li>
            <li className='services-box'>
                <div>
                    <FaIcons.FaShoppingBag className='services-box-icon' />
                </div>
                <div className='flex-col'>
                    <h4 className='services-box-h4'>Business Solutions</h4>
                    <p className='services-box-p'>
                        Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.
                    </p>
                    <Link to='/' className='services-box-link'>
                        Read More
                    </Link>
                </div>
            </li>
            <li className='services-box'>
                <div>
                    <FaIcons.FaUsers className='services-box-icon' />
                </div>
                <div className='flex-col'>
                    <h4 className='services-box-h4'>Client Management</h4>
                    <p className='services-box-p'>
                        Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.
                    </p>
                    <Link to='/' className='services-box-link'>
                        Read More
                    </Link>
                </div>
            </li>
            <li className='services-box'>
                <div>
                    <FaIcons.FaRocketchat className='services-box-icon' />
                </div>
                <div className='flex-col'>
                    <h4 className='services-box-h4'>Online Consulting</h4>
                    <p className='services-box-p'>
                        Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.
                    </p>
                    <Link to='/' className='services-box-link'>
                        Read More
                    </Link>
                </div>
            </li>
            <li className='services-box'>
                <div>
                    <FaIcons.FaChartPie className='services-box-icon' />
                </div>
                <div className='flex-col'>
                    <h4 className='services-box-h4'>Business Opportunities</h4>
                    <p className='services-box-p'>
                        Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.
                    </p>
                    <Link to='/' className='services-box-link'>
                        Read More
                    </Link>
                </div>
            </li>
            <li className='services-box'>
                <div>
                    <FaIcons.FaDesktop className='services-box-icon' />
                </div>
                <div className='flex-col'>
                    <h4 className='services-box-h4'>IT Consulting</h4>
                    <p className='services-box-p'>
                        Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.
                    </p>
                    <Link to='/' className='services-box-link'>
                        Read More
                    </Link>
                </div>
            </li>
        </ul>
    );
}

export default ServicesTable;