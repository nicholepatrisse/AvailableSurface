import React from 'react';
import { Link } from 'react-router-dom'

class RestaurantIndexItem extends React.Component {
    generateReservationLinks() {
        let buttons = [];
        let i = 0;
        while (buttons.length < 5) {
            buttons.push(<button key={i} className="res-button">Reserve</button>)
            i++;
        }
        return buttons;
    };

    generateStars() {
        let randRating = Math.floor(Math.random() * 5)
        let stars = [];
        for (let i = 0; i < 5; i++) {
            let starColor = 'gold';
            if (i > randRating) starColor = 'gray';

            stars.push(
                <i className={`fas fa-star ${starColor}-star`} key={i}></i>
            )
        };
        return stars;
    }

    price() {
        let dollaSigns = [];
        while (dollaSigns.length < parseInt(this.props.restaurant.price)) {
            dollaSigns.push('$')
        };
        return dollaSigns;
    }

    render () {
        return (
            <div key={this.props.restaurant.id} className="restaurant">
                <img src={this.props.restaurant.photoUrl} />
                <div className="restaurant-info">
                    <Link to={`/restaurants/${this.props.restaurant.id}`}>{this.props.restaurant.name}</Link>
                    <div className="stars-rating">
                        {this.generateStars()}
                    </div>
                    <ul className="restaurant-desc">
                        <li>{this.price()}</li>
                        <li>{this.props.restaurant.cuisine}</li>
                        <li>{`${this.props.restaurant.city}, ${this.props.restaurant.state}`}</li>
                    </ul>
                    {/* Available Reservation Times */}
                    {/* <div className="res-buttons">
                        {this.generateReservationLinks()}
                    </div> */}
                </div>
            </div>
        )
    }
};

export default RestaurantIndexItem;