import ReservationsIndex from './reservations_index';
import { connect } from 'react-redux'
import { fetchUser } from '../actions/user_actions';
import { fetchRestaurants } from '../actions/restaurant_actions';
import { changeFilter } from '../actions/filter_actions';
import { deleteReservation } from '../actions/reservation_actions';

const mapStateToProps = (state, ownProps) => ({
    userId: state.session.userId,
    reservations: state.entities.reservations,
    restaurants: state.entities.restaurants,
    history: ownProps.history,
})

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchRestaurants: filters => dispatch(fetchRestaurants(filters)),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
    deleteReservation: reservationId => dispatch(deleteReservation(reservationId)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReservationsIndex);