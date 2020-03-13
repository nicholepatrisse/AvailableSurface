import { connect } from 'react-redux';
import { fetchRestaurant } from '../actions/restaurant_actions'
import { changeFilter } from '../actions/filter_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import RestaurantPage from './restaurant_page';

const mapStateToProps = (state, ownProps) => ({
    restaurantId: ownProps.match.params.id,
    restaurant: state.entities.restaurants[ownProps.match.params.id],
    filters: state.ui.filters,
    modal: state.ui.modal,
});

const mapDispatchToProps = dispatch => ({
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId)),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantPage);