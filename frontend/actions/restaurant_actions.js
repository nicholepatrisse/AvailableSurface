import * as RestaurantAPIUtil from '../util/restaurants_api_util';

export const RECIEVE_RESTAURANTS = 'RECIEVE_RESTAURANTS';
export const RECIEVE_RESTAURANT = 'RECIEVE_RESTAURANT';
export const LOADING_RESTAURANTS = 'LOADING_RESTAURANTS'

export const receiveRestaurants = restaurants => ({
    type: RECIEVE_RESTAURANTS,
    restaurants
});

export const receiveRestaurant = restaurant => ({
    type: RECIEVE_RESTAURANT,
    restaurant
});

export const loadingRestaurants = () => ({
    type: LOADING_RESTAURANTS
});

export const fetchRestaurants = filters => dispatch => {
    dispatch(loadingRestaurants())
    return RestaurantAPIUtil.fetchRestaurants(filters)
    .then( restaurants => dispatch(receiveRestaurants(restaurants)) )
};

export const fetchRestaurant = restaurantId => dispatch => (
    RestaurantAPIUtil.fetchRestaurant(restaurantId)
    .then( restaurant => dispatch(receiveRestaurant(restaurant)) )
);

