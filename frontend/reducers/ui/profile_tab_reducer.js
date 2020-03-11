import { OPEN_MODAL } from "../../actions/modal_actions";

const initialState = 'profile'

const profileTabReducer = (state = initialState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
    
        default:
            return state;
    };
};

export default profileTabReducer;