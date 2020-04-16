import { TOGGLE_FILTER } from '../../actions/filter_actions';

const initialState = {
    cityParams: [],
    cuisineParams: [],
    priceParams: []
};

const togglesReducer = (state = initialState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case TOGGLE_FILTER:
            let valIdx = newState[action.filter].indexOf(action.value);
            if (valIdx > -1) {
                newState[action.filter].splice(valIdx, 1);
            } else {
                newState[action.filter].push(action.value);
            }
            return newState;

        default:
            return state;
    }
};

export default togglesReducer;