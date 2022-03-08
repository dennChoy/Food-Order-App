import React, { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MenuItem from './MenuItem';

import classes from './Menu.module.css'; 

const Menu = ()=> {
    const[meals, setMeals] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const[httpError, setHttpError] = useState();

    useEffect(() => {
      const fetchMeals = async () => {
        const response = await fetch('https://react-http-f96ff-default-rtdb.firebaseio.com/titaMeals.json');
        const responseData = await response.json();
        const loadedMeals = [];

        if(!response.ok){
          throw new Error("Something went wrong");
        }

        for(const key in responseData){
          loadedMeals.push({
            id:key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }
        setMeals(loadedMeals);
        setIsLoading(false);
      }
      
      fetchMeals().catch(error => {
        setIsLoading(false);
        setHttpError(error.message);
      });

    }, []);

    if(isLoading){
      return(
        <section className={classes.MealIsLoading}>
          <p>Lading</p>
        </section>
      );
    }

    if(httpError){
        return(
          <section className={classes.MealIsLoading}>    
            <p>{httpError}</p>
          </section>
            );
    }
    //const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
    const mealsList = meals.map((meal)=><MenuItem 
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