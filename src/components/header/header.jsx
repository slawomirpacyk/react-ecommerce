import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>Sklep</Link>
            <Link className='option' to='/shop'>Kontakt</Link>
            <Link className='option' to='/login'>Logowanie</Link>
        </div>
    </div>
)

export default Header;