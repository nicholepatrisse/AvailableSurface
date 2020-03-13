import React from 'react';
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';

const DropDown = ({ modal, logout }) => {
    if (!modal || modal != 'dropDown') {
        return null;
    };

    return (
        <div className='drop-down'>
            <ul>
                {/* <li><Link to="/profile">My Profile</Link></li> */}
                <li><Link to="/reservations">My Dining History</Link></li>
                {/* <li><Link to="/saved">My Saved Restaurants</Link></li> */}
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