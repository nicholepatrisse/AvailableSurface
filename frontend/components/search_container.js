import { connect } from 'react-redux';
import { openModal, closeModal } from '../actions/modal_actions';
import { updateFilter } from '../actions/filter_actions';
import Search from './search';
import { fetchRestaurants } from '../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => ({
    modal: state.ui.modal,
    filters: state.ui.filters,
});

const mapDispatchToProps = dispatch => ({
    openModal: type => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    fetchRestaurants: filters => dispatch(fetchRestaurants(filters))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);