import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { RECIEVE_RESERVATION, REMOVE_RESERVATION } from '../../actions/reservation_actions';

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.payload.reservations;

        case LOGOUT_CURRENT_USER:
            return {};

        case RECIEVE_RESERVATION:
            newState[action.reservation.id] = action.reservation
            return newState;

        case REMOVE_RESERVATION:
            delete newState[action.reservationId]
            return newState;
    
        default:
            return state;
    }
}

export default reservationsReducer;