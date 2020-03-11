import { LOADING_RESTAURANTS, RECIEVE_RESTAURANTS } from '../../actions/restaurant_actions';

const initial_state = {
    restaurantsLoading: false,
};

const loadingReducer = (state = initial_state, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case LOADING_RESTAURANTS:
            newState['restaurantsLoading'] = true;
            return newState;

        case RECIEVE_RESTAURANTS:
            return initial_state;

        default:
            return state;
    }
};

export default loadingReducer;