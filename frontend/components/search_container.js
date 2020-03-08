import { connect } from 'react-redux';
import { openModal, closeModal } from '../actions/modal_actions';
import { recieveParams } from '../actions/search_actions';
import { fetchRestaurants } from '../actions/restaurant_actions';
import { updateFilters } from '../actions/filter_actions';
import Search from './search';

const mapStateToProps = (state, ownProps) => ({
    modal: state.ui.modal,
    filters: state.ui.filters,
});

const mapDispatchToProps = dispatch => ({
    openModal: type => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal()),
    updateFilters: filters => dispatch(updateFilters(filters))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);