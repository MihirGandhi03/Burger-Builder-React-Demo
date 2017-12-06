import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { "label": 'Salad', "type": 'salad' },
    { "label": 'Meat', "type": 'meat' },
    { "label": 'Cheese', "type": 'cheese' },
    { "label": 'Bacon', "type": 'bacon' },
]
const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
                return (
                    <BuildControl disabled={props.disabled[ctrl.type]} removed={() => props.onIngredientsRemoved(ctrl.type)} added={() => props.onIngredientsAdded(ctrl.type)} label={ctrl.label} key={ctrl.label}></BuildControl>
                )
            })
        }
        <button className={classes.OrderButton} disabled={!(props.price.toFixed(2) > 4.00)} onClick={props.orderedButtonClick}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;