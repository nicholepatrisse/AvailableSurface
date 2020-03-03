import React from 'react';
import { closeModal } from '../../../actions/modal_actions'
import { connect } from 'react-redux';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }

    let component;
    let modalType;
    
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            modalType = 'modal-login'
            break;

        case 'signup':
            component = <SignupFormContainer />
            modalType = 'modal-signup'
            break;
    
        default:
            return null;
    }

    return (
        <div className="modal-screen" onClick={closeModal}>
            <div className={modalType} onClick={ e => e.stopPropagation() }>
                { component }
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    modal: state.ui.modal,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);