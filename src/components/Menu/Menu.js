import React from 'react';

import Card from '../UI/Card';
import MenuItem from './MenuItem';

import classes from './Menu.module.css'; 

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const Menu = ()=> {
    //const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
    const mealsList = DUMMY_MEALS.map((meal)=><MenuItem 
                                                id={meal.id}
                                                key={meal.id}
                                                title={meal.name}
                                                description={meal.description}
                                                price={meal.price}
                                              />);

    return(
      <section className={classes.Menu}>
          <Card>
            <ul>{mealsList}</ul>
          </Card>
        </section>
    );
}

export default Menu;