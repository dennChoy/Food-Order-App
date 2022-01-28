import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../store/cart-context';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const [btnIsHighlited, setBtnHighlited] = useState(false);
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx;
  const numberOfItems = items.reduce((curNumber, item) => {
    
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlited ? classes.bump: ''}`;

  useEffect(() => {
    if(items.length ===0){
      return;
    }
    setBtnHighlited(true);

    const timer = setTimeout(() => {
      setBtnHighlited(false);
    }, 300);

  }, [items]);

    return(
        <button className={btnClasses} onClick={props.onOpenModal}>
            <span className={classes.icon}>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    );
}

export default CartButton;