import React from 'react';
import ReservationButtons from '../reservation_buttons';
import { Link } from 'react-router-dom'

class RestaurantIndexItem extends React.Component {
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
                        <li>{`${this.props.restaurant.openAt}-${this.props.restaurant.closeAt}`}</li>
                    </ul>
                    <ReservationButtons 
                        num={5} 
                        restaurant={this.props.restaurant}
                        time={this.props.filters.dateParams}
                    />
                </div>
            </div>
        )
    }
};

export default RestaurantIndexItem;