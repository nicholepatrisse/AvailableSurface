import { RECIEVE_RESTAURANT, RECIEVE_RESTAURANTS } from '../../actions/restaurant_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECIEVE_RESTAURANTS:
            return action.restaurants;

        case RECIEVE_RESTAURANT:
            newState[action.restaurant.id] = action.restaurant;
            return newState;

        case RECEIVE_CURRENT_USER:
            Object.values(action.payload.restaurants).forEach( restaurant => (
                newState[restaurant.id] = restaurant
            ));
            return newState;
    
        default:
            return state;
    }
};

export default restaurantsReducer;