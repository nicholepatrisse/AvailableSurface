import { fetchRestaurants } from "../actions/restaurant_actions";

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter: filter,
    value: value,
});

export const changeFilters = filters => ({
    type: UPDATE_FILTERS,
    filters
});

export const toggleFilter = (filter, value) => ({
    type: TOGGLE_FILTER,
    filter,
    value
});

export const updateFilters = filters => dispatch => {
    dispatch(changeFilters(filters));
    return fetchRestaurants(getState().ui.filters)(dispatch);
}

export const updateToggleFilter = (filter, value) => (dispatch, getState) => {
    dispatch(toggleFilter(filter, value))
    return fetchRestaurants(getState().ui.filters)(dispatch);
}