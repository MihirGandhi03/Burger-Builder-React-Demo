import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    cheese: 0.5,
    meat: 1.5,
    bacon: 1.0,
    salad: 0.8
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        orderPurchased: false
    }

    showConfirmOrderDialog = () => {
        this.setState({ orderPurchased: true });
    }

    hideModal = () => {
        this.setState({ orderPurchased: false });
    }

    addIngredientsHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState({ totalPrice: updatedPrice, ingredients: updatedIngredients });
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] > 0) {
            const updatedCount = this.state.ingredients[type] - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            const updatedPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
            this.setState({ totalPrice: updatedPrice, ingredients: updatedIngredients });
        }
    }

    checkOutHandler = () =>{

    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (<Aux>
            {/* {this.state.orderPurchased ? <Modal>
                <OrderSummary ingredients={this.state.ingredients} />
            </Modal> : null} */}
            <Modal show={this.state.orderPurchased} modalClosed={this.hideModal}>
                <OrderSummary price={this.state.totalPrice.toFixed(2)} checkoutClicked={this.checkOutHandler} cancelClicked={this.hideModal} ingredients={this.state.ingredients} />
            </Modal>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls onIngredientsAdded={this.addIngredientsHandler}
                onIngredientsRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice} orderedButtonClick={this.showConfirmOrderDialog} />
        </Aux>
        )
    }
}

export default BurgerBuilder