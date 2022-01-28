import React, { useContext } from 'react';
import CartContext from '../store/cart-context';

import Modal from '../UI/Modal';

import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const sumAmountItem = (item) => {
        cartCtx.addItem({...item, amount:1})
    }

    const subAmountItem = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem 
                    name={item.name} 
                    price={item.price} 
                    amount={item.amount} 
                    onSumAmount={sumAmountItem.bind(null, item)} 
                    onSubstractAmount={subAmountItem.bind(null, item.id)}/>
                ))}
        </ul>
        );
    
    const hasItems = cartCtx.items.length > 0;
    const totalAmount = cartCtx.totalAmount.toFixed(2);
    return(
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClick} >Cerrar</button>
                {hasItems && <button className={classes.button}>Ordenar</button>}
            </div>
        </Modal>
    );
}

export default Cart;