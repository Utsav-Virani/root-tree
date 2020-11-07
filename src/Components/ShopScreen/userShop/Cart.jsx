import React, { useState } from 'react';
import Style from './Cart.module.scss'

export default function Cart(props) {

    return (
        <React.Fragment>
            <div className={`${Style.contBg}`}>
                <div className={`${Style.cartContFooter}`}>Totel($) : </div>
            </div>
        </React.Fragment>
    )
}