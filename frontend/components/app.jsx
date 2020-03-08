import React from 'react';
import Main from './main';
import Footer from './footer';
import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './nav_bar/session_forms/modal';
import { closeModal } from '../actions/modal_actions';
import { Switch, Route } from 'react-router-dom';
import RestaurantIndexContainer from './restaurant_index_container';

const App = () => (
    <div onClick={() => closeModal()}>
        <Modal />
        <NavBarContainer />
        <Switch>
            <Route path="/restaurants" component={RestaurantIndexContainer} />
            <Route path="/" component={Main} />
        </Switch>
    </div>
);

export default App;