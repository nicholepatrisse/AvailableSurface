import { connect } from 'react-redux'
import { fetchRestaurant } from '../actions/restaurant_actions';
import { fetchUser } from '../actions/user_actions'
import { openModal } from '../actions/modal_actions';
import { createReservation } from '../actions/reservation_actions';
import ReservationForm from './reservation_form';

const mapStateToProps = (state, ownProps) => ({
    restaurant: state.entities.restaurants[ownProps.match.params.id],
    userId: state.session.userId,
    user: state.entities.users[state.session.userId],
    history: ownProps.history,
    restaurantId: ownProps.match.params.id,
    parties: state.ui.filters.partyParams,
});

const mapDispatchToProps = dispatch => ({
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModal: modal => dispatch(openModal(modal)),
    createReservation: reservation => dispatch(createReservation(reservation))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReservationForm)