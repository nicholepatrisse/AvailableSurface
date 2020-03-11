import { combineReducers } from 'redux';
import sessionErrorsReducer from './errors/session_errors_reducer';
import reservationErrorsReducer from './errors/reservation_errors_reducer';

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
    reservationErrors: reservationErrorsReducer,
});

export default errorsReducer;