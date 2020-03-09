import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import SearchContainer from './search_container';
import IndexSidebar from './index_sidebar';

class RestaurantIndex extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurants(this.props.filters)
    }

    calcTables() {
        let num = Object.keys(this.props.restaurants).length;
        return `${num} restaurants available!`;
    };

    render() {
        let restaurants = Object.values(this.props.restaurants)
        .map( restaurant => <RestaurantIndexItem key={restaurant.id} restaurant={restaurant} filters={this.props.filters}/> );

        return (
            <div className="restaurant-index">
                {/* Compact Search Bar */}
                <div className="compact-search">
                    <SearchContainer />
                </div>
                <div className="restaurant-index-main">
                    <IndexSidebar updateToggleFilter={this.props.updateToggleFilter}/>
                    {/* Restaurant Index */}
                    <div className="restaurants">
                        <p>{this.calcTables()}</p>
                        {restaurants}
                    </div>
                </div>
            </div>
        )
    };
};

export default RestaurantIndex;