import { connect } from 'react-redux';
import { openModal, closeModal } from '../actions/modal_actions';
import { updateFilters, changeFilter } from '../actions/filter_actions';
import Search from './search';
import { fetchRestaurants } from '../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => ({
    modal: state.ui.modal,
    filters: state.ui.filters,
});

const mapDispatchToProps = dispatch => ({
    openModal: type => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal()),
    updateFilters: filters => dispatch(updateFilters(filters)),
    fetchRestaurants: filters => dispatch(fetchRestaurants(filters)),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);