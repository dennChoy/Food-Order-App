import React from "react";

import classes from './MenuFormItem.module.css';

import Input from '../UI/Input';

const MenuFormItem = (props) =>{
    return (
    <form className={classes.form}>
        <Input label={'Cantidad'}
        input={{
            id:'amount_'+props.id,
            type:'number',
            min:'1',
            max:'5' ,
            step:'1',
            defaultValue:'1'    
        }}
        />
        <button className={classes.button}>+ Agregar</button>
    </form>);
}

export default MenuFormItem;