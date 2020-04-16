import { combineReducers } from 'redux';
import modalReducer from './ui/modal_reducer';
import filtersReducer from './ui/filters_reducer';
import loadingReducer from './ui/loading_reducer';
import profileTabReducer from './ui/profile_tab_reducer';
import togglesReducer from './ui/toggles_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    filters: filtersReducer,
    toggles: togglesReducer,
    loading: loadingReducer,
    profileTab: profileTabReducer,
});

export default uiReducer;