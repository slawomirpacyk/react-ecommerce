import React from 'react';
import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart-selectors';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>Idź do kasy</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);