import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import SearchContainer from '../search_container';
import IndexSidebar from './index_sidebar';

class RestaurantIndex extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurants(this.props.filters)
    }

    calcTables() {
        let num = Object.keys(this.props.restaurants).length;
        return `${num} restaurants available!`;
    };

    loading() {
        return (
            <div className="restaurants">
                <p>Loading restaurants, please hold.</p>
                <img src={window.loading} className="loading-clock"/>
            </div>
        )
    };

    loaded() {
        let restaurants = Object.values(this.props.restaurants)
        .map( restaurant => (
            <RestaurantIndexItem 
                key={restaurant.id} 
                restaurant={restaurant} 
                filters={this.props.filters}
                changeFilter={this.props.changeFilter}
            />
        ));

        return (
            <div className="restaurants">
                <p>{this.calcTables()}</p>
                {restaurants}
            </div>
        )
    }

    render() {
        return (
            <div className="restaurant-index">
                <div className="compact-search">
                    <SearchContainer />
                </div>
                <div className="restaurant-index-main">
                    <IndexSidebar updateToggleFilter={this.props.updateToggleFilter}/>
                    {this.props.loading ? 
                    this.loading() :
                    this.loaded()}
                </div>
            </div>
        )
    };
};

export default RestaurantIndex;