import React from 'react';
import { Link } from 'react-router-dom'

class RestaurantIndexItem extends React.Component {
    generateReservationLinks() {
        let openClosed = 'open';
        if (Math.floor(Math.random() * 100) < 50) openClosed = 'closed'; 
        let buttons = [];
        let i = 0;
        while (buttons.length < 5) {
            buttons.push(<button key={i} className={`res-button ${openClosed}`}>Reserve</button>)
            i++;
        }
        return buttons;
    };

    placeHolderImg() {
        let images = [
            "https://stmedia.stimg.co/uptown-minneapolis-restaurant-libertine-closed.jpg?w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80", 
            "https://images.unsplash.com/photo-1515539408953-9403f070ad2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
        ]
        let img = images[Math.floor(Math.random() * images.length)];
        return img;
    }

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
                <img src={this.placeHolderImg()} />
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
                    <div className="res-buttons">
                        {this.generateReservationLinks()}
                    </div>
                </div>
            </div>
        )
    }
};

export default RestaurantIndexItem;