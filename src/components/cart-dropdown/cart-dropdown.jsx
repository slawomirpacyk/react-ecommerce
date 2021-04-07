import React from 'react';
import CustomButton from '../custom-button/custom-button';

import CustomButtom from '../custom-button/custom-button';

import './cart-dropdown.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <CustomButton>Idź do kasy</CustomButton>
    </div>
);

export default CartDropdown;