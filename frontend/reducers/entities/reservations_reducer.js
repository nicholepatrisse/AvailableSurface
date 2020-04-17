
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_RESERVATION, REMOVE_RESERVATION } from '../../actions/reservation_actions';

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        if (action.payload.reservations) {
          return action.payload.reservations;
        } else {
          return state;
        }

      case LOGOUT_CURRENT_USER:
        return {};

      case RECEIVE_RESERVATION:
        newState[action.reservation.id] = action.reservation;
        return newState;

      case REMOVE_RESERVATION:
        delete newState[action.reservationId];
        return newState;

      default:
        return state;
    }
}

export default reservationsReducer;