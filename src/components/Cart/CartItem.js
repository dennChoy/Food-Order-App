import React from "react";

import classes from './CartItem.module.css'

const CartItem = (props) => {

    const price = `$${props.price}`;
    //console.log(props.id);
    return(
        <li key={props.id} className={classes['cart-item']} >
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.summary}>{price}</span>
                    <span className={classes.amount}>{props.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onSumAmount}>+</button>
                <button onClick={props.onSubstractAmount}>-</button>
            </div>
        </li>
    );
}

export default CartItem;