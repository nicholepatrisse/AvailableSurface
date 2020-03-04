import { connect } from 'react-redux';
import React from 'react';
import { login, loginDemo } from '../../../actions/session_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import LoginForm from './login_form';

const mapStateToProps = state => ({
    errors: state.errors.sessionErrors,
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    otherForm: () => dispatch(openModal('signup')),
    closeModal: () => dispatch(closeModal()),
    loginDemo: () => dispatch(loginDemo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
