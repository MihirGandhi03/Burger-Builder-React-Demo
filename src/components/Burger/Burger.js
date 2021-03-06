import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let tranformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, index) => {
            return <BurgerIngredient key={igKey + index} type={igKey} ></BurgerIngredient>;
        })
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if (tranformedIngredients.length === 0) {
        tranformedIngredients = <p> Please start adding ingredients </p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {tranformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
}

export default burger;