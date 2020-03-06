import { RECIEVE_TIME_PARAM } from '../actions/search_actions'

function nearestQuarter() {
    let now = new Date();
    let roundedTime = {
        minute: (now.getMinutes() + 30),
        hour: now.getHours()
    };

    if (roundedTime.minute >= 45) {
        roundedTime.minute = '00';
        roundedTime.hour++
    } else if (roundedTime.minute >= 30) {
        roundedTime.minute = 45;
    } else if (roundedTime.minute >= 15) {
        roundedTime.minute = 30;
    } else {
        roundedTime.minute = 15;
    }

    let timeString = `${roundedTime.hour}${roundedTime.minute}`;
    return timeString;
};

const _nullState = {
    time: nearestQuarter(),
    location: null
}

const searchReducer = (state = _nullState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECIEVE_TIME_PARAM:
            newState['time'] = action.param.time;
            return newState;
    
        default:
            return state;
    }
};

export default searchReducer;