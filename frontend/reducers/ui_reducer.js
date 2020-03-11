import { combineReducers } from 'redux';
import modalReducer from './ui/modal_reducer';
import filtersReducer from './ui/filters_reducer';
import loadingReducer from './ui/loading_reducer';
import profileTabReducer from './ui/profile_tab_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    filters: filtersReducer,
    loading: loadingReducer,
    profileTab: profileTabReducer,
});

export default uiReducer;