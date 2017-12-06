import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    hideSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    openSideDrawerHandler = () => {
        this.setState((prevstate) => {
            return { showSideDrawer: !prevstate.showSideDrawer }
        });
    }

    render() {
        return (
            <Aux>
                <ToolBar openSideDrawer={this.openSideDrawerHandler} />
                <SideDrawer hideSideDrawer={this.hideSideDrawerHandler} show={this.state.showSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};

export default Layout;