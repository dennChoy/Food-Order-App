import React, { useContext, useState } from 'react';
import CartContext from '../store/cart-context';

import Modal from '../UI/Modal';
import Checkout from './Checkout';

import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const[isSubFormActive, setSubFormActive] = useState(false);
    const[isSubmitting, setIsSubmitting] =  useState(false);
    const[isSubmitSuccess, setSubmitSuccess] = useState(false);

    const cartCtx = useContext(CartContext);

    const sumAmountItem = (item) => {
        cartCtx.addItem({...item, amount:1})
    }

    const subAmountItem = (id) => {
        cartCtx.removeItem(id);
    }

    const activateConfirmOrder = () => {
        setSubFormActive(true);
    }   

    const cancelOrder = () => {
        setSubFormActive(false);
    }

    const confirmOrder = async (userData) => {
        setIsSubmitting(true);
        fetch('https://react-http-f96ff-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems:cartCtx.items
            })
        });
        setIsSubmitting(false);
        setSubmitSuccess(true);
        cartCtx.clearCart();

    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem 
                    key={item.id}
                    id={item.id}
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

    const modalActions =   <div className={classes.actions}>
                                <button className={classes['button--alt']} onClick={props.onClick} >Cerrar</button>
                                {hasItems && <button className={classes.button} onClick={activateConfirmOrder} >Ordenar</button>}
                            </div>;


    const ModalContent = <React.Fragment>
                            {cartItems}
                            <div className={classes.total}>
                                <span>Total Amount</span>
                                <span>{totalAmount}</span>
                            </div>
                            {isSubFormActive && <Checkout ConfirmOrder={confirmOrder} CancelSubForm={cancelOrder}/>}
                            {!isSubFormActive && modalActions}
                        </React.Fragment>

    const ModalSubmitting = <p>Procesando orden...</p>;
    const ModalSubmitSuccess= <p><button className={classes['button--alt']} onClick={props.onClick} >X</button>Orden confirmada correctamente </p>;
    
    return(
        <Modal>
          {!isSubmitting && !isSubmitSuccess && ModalContent}
          {isSubmitting && ModalSubmitting}
          {!isSubmitting && isSubmitSuccess && ModalSubmitSuccess}
        </Modal>
    );
}

export default Cart;