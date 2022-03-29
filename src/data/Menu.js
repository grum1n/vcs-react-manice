import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const Menu = [
  {
    title: 'Home +',
    path: '/',
    icon: <FaIcons.FaHome />,
    cName: 'menu-links'
  },
  {
    title: 'About',
    path: '/about',
    icon: <FaIcons.FaInfoCircle />,
    cName: 'menu-links'
  },
  {
    title: 'Services +',
    path: '/services',
    icon: <FaIcons.FaUsersCog />,
    cName: 'menu-links'
  },
  {
    title: 'News',
    path: '/news',
    icon: <FaIcons.FaNewspaper />,
    cName: 'menu-links'
  },
  {
    title: 'Pages +',
    path: '/pages',
    icon: <FaIcons.FaListAlt />,
    cName: 'menu-links'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <FaIcons.FaAddressCard  />,
    cName: 'menu-links'
  }
];