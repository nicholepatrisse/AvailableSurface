import { UPDATE_FILTER, UPDATE_FILTERS, TOGGLE_FILTER } from '../../actions/filter_actions'

const nextAvail = new Date();
nextAvail.setMinutes(Math.round((nextAvail.getMinutes() + 30) / 15) * 15);

const initialState = {
    dateParams: nextAvail,
    partyParams: 2,
    searchParams: "",
    occasion: '',
    requests: '',
};

const filtersReducer = (state = initialState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case UPDATE_FILTER:
            newState[action.filter] = action.value;
            return newState;

        case UPDATE_FILTERS:
            return action.filters;
    
        default:
            return state;
    }
};

export default filtersReducer;