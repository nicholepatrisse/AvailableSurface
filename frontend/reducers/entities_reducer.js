import { combineReducers } from 'redux';
import usersReducer from './entities/users_reducer';
import restaurantsReducer from './entities/restaurants_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer,
});

export default entitiesReducer;