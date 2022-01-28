import React, { useContext } from "react";
import CartContext from "../store/cart-context";

import MenuFormItem from './MenuFormItem';

import classes from "./MenuItem.module.css";

const MenuItem = (props) =>{
    const cartCtx = useContext(CartContext);
    
    const onAddToCartHandler = amountItem => {
        cartCtx.addItem({
            id: props.id,
            name: props.title,
            amount: amountItem,
            price: props.price
        });
    }

    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div>
                <MenuFormItem id={props.id} onAddToCart={onAddToCartHandler}/>
            </div>
        </li>
    );
}

export default MenuItem;