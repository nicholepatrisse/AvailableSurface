export const fetchRestaurants = params => (
    $.ajax({
        url: '/api/restaurants',
        data: { params }
    })
);

export const fetchRestaurant = restaurantId => (
    $.ajax({
        url: `/api/restaurants/${restaurantId}`
    })
);