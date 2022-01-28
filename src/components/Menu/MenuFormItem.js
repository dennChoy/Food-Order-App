import React, { useRef } from "react";

import classes from './MenuFormItem.module.css';

import Input from '../UI/Input';

const MenuFormItem = (props) =>{
    const amountInputRef = useRef();

    const onAddItem = (event) => {
        event.preventDefault();

        const enteredAmount = +amountInputRef.current.value
        props.onAddToCart(enteredAmount);
    }

    return (
    <form className={classes.form}>
        <Input label={'Cantidad'}
        input={{
            ref:amountInputRef,
            id:'amount_'+props.id,
            type:'number',
            min:'1',
            max:'5' ,
            step:'1',
            defaultValue:'1'    
        }}
        />
        <button className={classes.button} onClick={onAddItem} >+ Agregar</button>
    </form>);
}

export default MenuFormItem;