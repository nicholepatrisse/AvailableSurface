import { UPDATE_FILTERS } from '../../actions/filter_actions'

const nextAvail = new Date();
nextAvail.setMinutes(Math.round((nextAvail.getMinutes() + 30) / 15) * 15);

const _nullState = {
    dateParams: nextAvail,
    partyParams: 2,
    searchParams: ''
};

const filtersReducer = (state = _nullState, action) => {
    switch (action.type) {
        case UPDATE_FILTERS:
            return action.filters
    
        default:
            return state;
    }
};

export default filtersReducer;