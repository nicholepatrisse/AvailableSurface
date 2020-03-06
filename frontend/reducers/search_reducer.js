import { RECIEVE_TIME_PARAM, RECIEVE_PARTY_PARAM } from '../actions/search_actions'

const NOW = new Date();

function getTimeString() {
    let roundedTime = {
        minute: (NOW.getMinutes() + 30),
        hour: NOW.getHours()
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

function getDateString() {
    let currentDate = {
        day: NOW.getDate(),
        month: NOW.getMonth(),
        year: NOW.getFullYear(),
    };
    let dateString = `${currentDate.month}/${currentDate.day}/${currentDate.year}`;
    return dateString;
}

const _nullState = {
    time: getTimeString(),
    location: 'San Francisco',
    date: getDateString(),
    party: 2
}

const searchReducer = (state = _nullState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECIEVE_TIME_PARAM:
            newState['time'] = action.param.time;
            return newState;
    
        case RECIEVE_PARTY_PARAM:
            newState['party'] = action.param.party;
            return newState;
    
        default:
            return state;
    }
};

export default searchReducer;