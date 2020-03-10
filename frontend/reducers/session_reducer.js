import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullState = {
    userId: null,
    firstName: null,
}

const sessionReducer = (state = _nullState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState['userId'] = action.payload.user.id;
            newState['firstName'] = action.payload.user.firstName;
            return newState;
            
        case LOGOUT_CURRENT_USER:
            return _nullState;
    
        default:
            return state;
    }
}

export default sessionReducer;