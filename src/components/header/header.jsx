import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>Sklep</Link>
            <Link className='option' to='/shop'>Kontakt</Link>
            {
                currentUser 
                ? <div className='option' onClick={() => auth.signOut()}>Wyloguj się</div>
                : <Link className='option' to='/login'>Logowanie</Link>
            }
            <CartIcon />
        </div>
        { hidden ? null : <CartDropdown /> }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);