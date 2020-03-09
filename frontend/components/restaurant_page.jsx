import React from 'react';
import {connect} from 'react-redux';
import { fetchRestaurant } from '../actions/restaurant_actions'

const price = {
    1: '$',
    2: '$$',
    3: '$$$',
    4: '$$$$'
};

class RestaurantPage extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurant(this.props.restaurantId)
    };

    loaded() {
        return (
            <div className="restaurant-show">
                <div className="img-header">
                    <img src={this.props.restaurant.photoUrl} alt=""/>
                </div>
                <div className="restaurant-show-main">
                    <ul className="restaurant-links">
                        <li>Overview</li>
                        <li>Reviews</li>
                    </ul>
                    <h2>{this.props.restaurant.name}</h2>
                    <ul className="restaurant-desc">
                        <li>{price[this.props.restaurant.price]}</li>
                        <li>{this.props.restaurant.cuisine}</li>
                        <li>{`${this.props.restaurant.city}, ${this.props.restaurant.state}`}</li>
                    </ul>
                    {this.props.restaurant.description}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="restaurant-page">
                {this.props.restaurant ?
                this.loaded() :
                "Not Loaded"}
            </div>
        )
    };
}

const mapStateToProps = (state, ownProps) => ({
    restaurantId: ownProps.match.params.id,
    restaurant: state.entities.restaurants[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantPage);