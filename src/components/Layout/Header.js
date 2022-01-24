import React from 'react';

import Banner from './Banner';
import CartButton from './CartButton';

import classes from './Header.module.css';


const Header = () => {
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>El Rinconcito de Mamá Tita </h1>
                <CartButton>asdfasdf </CartButton>
            </header>
            <Banner/>
        </React.Fragment>
    );
}

export default Header;