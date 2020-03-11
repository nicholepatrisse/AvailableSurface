import { RECIEVE_RESERVATION_ERRORS, RECIEVE_RESERVATION } from "../../actions/reservation_actions";

const initialState = [];

const reservationErrorsReducer = (state = initialState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECIEVE_RESERVATION_ERRORS:
            return action.errors;
    
        case RECIEVE_RESERVATION:
            return initialState;
            
        default:
            return state;
    }
};

export default reservationErrorsReducer;