import React from 'react';
import classes from './NaviagtionItem.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem} >
        <a className={props.active ? classes.active : null}>{props.children}</a>
    </li>
);

export default navigationItem;