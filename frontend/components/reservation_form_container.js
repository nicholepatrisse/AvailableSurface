import { connect } from 'react-redux'
import { fetchRestaurant } from '../actions/restaurant_actions';
import { fetchUser, updateUser } from '../actions/user_actions'
import { openModal } from '../actions/modal_actions';
import { createReservation, updateReservation } from '../actions/reservation_actions';
import ReservationForm from './reservation_form';

const mapStateToProps = (state, ownProps) => ({
    restaurant: state.entities.restaurants[ownProps.match.params.id],
    userId: state.session.userId,
    user: state.entities.users[state.session.userId],
    restaurantId: ownProps.match.params.id,
    filters: state.ui.filters,
});

const mapDispatchToProps = dispatch => ({
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModal: modal => dispatch(openModal(modal)),
    createReservation: reservation => dispatch(createReservation(reservation)),
    updateReservation: reservation => dispatch(updateReservation(reservation)),
    updateUser: user => dispatch(updateUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReservationForm)