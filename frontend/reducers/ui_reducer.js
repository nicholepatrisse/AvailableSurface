import { combineReducers } from 'redux';
import modalReducer from './ui/modal_reducer';
import filtersReducer from './ui/filters_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    filters: filtersReducer,
});

export default uiReducer;