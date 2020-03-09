import React from 'react';
import {connect} from 'react-redux';

const price = {
    1: '$',
    2: '$$',
    3: '$$$'
};

const RestaurantPage = props => {
    return (
        <div className="restaurant-show">
            {props.restaurant.name}
            <ul className="restaurant-desc">
                <li>{price[props.restaurant.price]}</li>
                <li>{props.restaurant.cuisine}</li>
                <li>{`${props.restaurant.city}, ${props.restaurant.state}`}</li>
            </ul>
            {props.restaurant.description}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    restaurant: state.entities.restaurants[ownProps.match.params.id],
});

export default connect(
    mapStateToProps,
    null
)(RestaurantPage);