import { combineReducers } from 'redux';
import usersReducer from './entities/users_reducer';
import restaurantsReducer from './entities/restaurants_reducer';
import reservationsReducer from './entities/reservations_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer,
    reservations: reservationsReducer,
});

export default entitiesReducer;