import { connect } from 'react-redux';
import { openModal, closeModal } from '../actions/modal_actions';
import { updateFilter } from '../actions/filter_actions';
import Search from './search';

const mapStateToProps = (state, ownProps) => ({
    modal: state.ui.modal,
    filters: state.ui.filters,
});

const mapDispatchToProps = dispatch => ({
    openModal: type => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);