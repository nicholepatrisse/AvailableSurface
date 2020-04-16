import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import SearchContainer from '../search_container';
import IndexSidebar from './index_sidebar';

class RestaurantIndex extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurants(this.props.filters)
    }

    calcTables(restaurants) {
        let num = restaurants.length;
        return `${num} restaurants available!`;
    };

    loading() {
        return (
            <div className="restaurant-index-main">
                <div className="restaurants">
                    <p>Loading restaurants, please hold.</p>
                    <img src={window.loading} className="loading-clock"/>
                </div>
            </div>
        )
    };

    loaded() {
        let filteredRestaurants = Object.values(this.props.restaurants);
        
        let cuisines = this.props.toggles.cuisineParams;
        if (cuisines.length > 0) {
            filteredRestaurants = filteredRestaurants
            .filter(restaurant => cuisines.includes(restaurant.cuisine))
        };
        
        let cities = this.props.toggles.cityParams.map(city => city.split(',')[0]);
        if (cities.length > 0) {
            filteredRestaurants = filteredRestaurants
            .filter(restaurant => cities.includes(restaurant.city))
        };
        
        let prices = this.props.toggles.priceParams.map(price => price.length);
        if (prices.length > 0) {
            filteredRestaurants = filteredRestaurants
            .filter(restaurant => prices.includes(restaurant.price))
        };

        let restaurants = filteredRestaurants.map(restaurant => (
            <RestaurantIndexItem 
                key={restaurant.id} 
                restaurant={restaurant} 
                filters={this.props.filters}
                changeFilter={this.props.changeFilter}
            />
        ));

        return (
            <div className="restaurant-index-main">
                <IndexSidebar 
                    updateToggleFilter={this.props.updateToggleFilter} 
                    restaurants={Object.values(this.props.restaurants)} 
                />
                <div className="restaurants">
                    <p>{this.calcTables(restaurants)}</p>
                    {restaurants}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="restaurant-index">
                <div className="compact-search">
                    <SearchContainer />
                </div>
                {this.props.loading ? 
                this.loading() :
                this.loaded()}
            </div>
        )
    };
};

export default RestaurantIndex;