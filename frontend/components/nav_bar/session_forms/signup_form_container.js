import { connect } from 'react-redux';
import { signup } from '../../../actions/session_actions';
import { closeModal, openModal } from '../../../actions/modal_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    otherForm: () => dispatch(openModal('login'))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);