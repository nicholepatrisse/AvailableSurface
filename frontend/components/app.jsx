import React from 'react';
import Main from './main';
import Footer from './footer';
import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './nav_bar/session_forms/modal';
import { closeModal } from '../actions/modal_actions';

const App = () => (
    <div onClick={() => closeModal()}>
        <Modal />
        <NavBarContainer />
        <Main />
        <Footer />
    </div>
);

export default App;