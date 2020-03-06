import React from 'react';
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const DropDown = ({ modal, logout }) => {
    if (!modal || modal != 'dropDown') {
        return null;
    };

    return (
        <div className='drop-down'>
            <ul>
                <li>My Profile</li>
                <li>My Dining History</li>
                <li>My Saved Restaurants</li>
                <li onClick={logout}>Sign out</li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    modal: state.ui.modal,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);