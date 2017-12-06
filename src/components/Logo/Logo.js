import React from 'react';
import classes from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

console.log("hello");
const logo = (props) => (
    <img src={burgerLogo} alt="MyBurger" className={classes.Logo} />
);

export default logo;