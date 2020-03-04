import { connect } from 'react-redux';
import { signup, login } from '../../../actions/session_actions';
import { closeModal, openModal } from '../../../actions/modal_actions';
import SignupForm from './signup_form';

const mapStateToProps = state => ({
    errors: state.errors.sessionErrors,
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    otherForm: () => dispatch(openModal('login')),
    login: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);