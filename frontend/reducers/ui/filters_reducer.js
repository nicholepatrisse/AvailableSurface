import { UPDATE_FILTER, TOGGLE_FILTER } from '../../actions/filter_actions'

const nextAvail = new Date();
nextAvail.setMinutes(Math.round((nextAvail.getMinutes() + 30) / 15) * 15);

const _nullState = {
    dateParams: nextAvail,
    partyParams: 2,
    searchParams: "",
    cuisineParams: [],
    cityParams: [],
    priceParams: [],
};

const filtersReducer = (state = _nullState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case UPDATE_FILTER:
            newState[action.filter] = action.value;
            return newState;

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

export default filtersReducer;