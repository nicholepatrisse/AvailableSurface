import React from 'react';
import Main from './main';
import Footer from './footer';
import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './nav_bar/session_forms/modal';
import { closeModal } from '../actions/modal_actions';
import { Switch, Route } from 'react-router-dom';
import RestaurantIndexContainer from './index/restaurant_index_container';
import RestaurantContainer from './restaurant_page_container';
import ReservationFormContainer from './reservation_form_container';
import ReservationsIndexContainer from './reservations_index_container';
import EditReservationFormContainer from './edit_reservation_form_container';

const App = () => (
    <div onClick={() => closeModal()}>
        <Modal />
        <NavBarContainer />
        <Switch>
            <Route path="/reservations" component={ReservationsIndexContainer}/>
            <Route path="/restaurants/:id/reserve/:reservationId" component={EditReservationFormContainer} />
            <Route path="/restaurants/:id/reserve" component={ReservationFormContainer} />
            <Route path="/restaurants/:id" component={RestaurantContainer} />
            <Route path="/restaurants" component={RestaurantIndexContainer} />
            <Route path="/" component={Main} />
        </Switch>
        <Footer />
    </div>
);

export default App;