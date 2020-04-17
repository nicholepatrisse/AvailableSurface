import { RECEIVE_RESERVATION_ERRORS, RECEIVE_RESERVATION } from '../../actions/reservation_actions';

const initialState = [];

const reservationErrorsReducer = (state = initialState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
      case RECEIVE_RESERVATION_ERRORS:
        return action.errors;

      case RECEIVE_RESERVATION:
        return initialState;

      default:
        return state;
    }
};

export default reservationErrorsReducer;