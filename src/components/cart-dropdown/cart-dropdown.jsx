import React from 'react';
import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart-selectors';

import { toggleCartHidden } from '../../redux/cart/cart-actions';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length
                ? cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                : <span className='empty-message'>Brak produktów w koszyku</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>
            Idź do kasy
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));