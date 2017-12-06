import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey} : {props.ingredients[igKey]}</span></li>
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients is on your way : </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price : {props.price}</strong></p>
            <p> Continue to Checkout ?</p>
            <Button clicked={props.checkoutClicked} btnType="Success" >CONTINUE</Button>
            <Button clicked={props.cancelClicked} btnType="Danger" >CANCEL</Button>
        </Aux>
    )
}
export default orderSummary;