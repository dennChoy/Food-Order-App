import React, {Fragment} from 'react';

import headerImage from '../../image/main-image2.jpg';
import classes from './Banner.module.css';

const Banner = () => {
    return (
        <Fragment>
            <div className={classes.banner}>
                <img src={headerImage}/>
            </div>
            <section className={classes.presentation}>
                <h2>Delicious Food, Delivered To You</h2>
                <p>
                    Choose your favorite meal from our broad selection of available meals
                    and enjoy a delicious lunch or dinner at home.
                </p>
                <p>
                    All our meals are cooked with high-quality ingredients, just-in-time and
                    of course by experienced chefs!
                </p>
                </section>
        </Fragment>
    );
}

export default Banner;