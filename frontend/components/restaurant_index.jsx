import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import SearchContainer from './search_container';

class RestaurantIndex extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurants(this.props.filters)
    }

    generateCuisines() {
        let cuisines = ['French', 'Greek', 'Steakhouse', 'Seafood', 'American', 'Italian', 'Tapas', 'Japanese', 'Mexican', 'Sushi']
            .map(cuisine => (
                <div className="cuisine-option" key={cuisine}>
                    <input type="checkbox" value={cuisine} /> {cuisine}
                </div>
            ));
        return cuisines;
    }

    calcTables() {
        let allRestaurants = Object.keys(this.props.restaurants).length;
        let avgTables = 50;
        let num = Math.floor(Math.random() * allRestaurants * avgTables);
        return `More than ${num} tables available!`;
    };

    render() {
        let restaurants = Object.values(this.props.restaurants)
        .map( restaurant => <RestaurantIndexItem restaurant={restaurant} filters={this.props.filters}/> );

        return (
            <div className="restaurant-index">
                {/* Compact Search Bar */}
                <div className="compact-search">
                    <SearchContainer />
                </div>

                <div className="restaurant-index-main">
                    {/* Sidebar-Left */}
                    <div className="side-bar">
                        {/* Will Fetch Tags from the db to narrow search */}
                        <h2>Cuisines</h2>
                        <div className="sidebar-divider" />
                        {this.generateCuisines()}
                    </div>

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