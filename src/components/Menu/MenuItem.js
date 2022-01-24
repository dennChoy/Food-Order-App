import React from "react";

import MenuFormItem from './MenuFormItem';

import classes from "./MenuItem.module.css";

const MenuItem = (props) =>{
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div>
                <MenuFormItem id={props.id}/>
            </div>
        </li>
    );
}

export default MenuItem;