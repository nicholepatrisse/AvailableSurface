import React from 'react';
import { Link } from 'react-router-dom'

class RestaurantIndexItem extends React.Component {
    printTime(time) {
        let minute = time.getMinutes();
        let hour = time.getHours();
        let ampm = 'AM'
        if (hour === 12) {
            ampm = 'PM';
        } else if (hour === 0) {
            hour = 12;
        } else if (hour > 12) {
            hour -= 12;
            ampm = "PM";
        };
        if (minute < 10) minute = `0${minute}`;
        return `${hour}:${minute} ${ampm}`
    }

    available(time) {
        let currentTime = new Date();
        if (time.getHours() >= this.props.restaurant.openAt && time.getHours() < this.props.restaurant.closesAt && time > currentTime) {
            return true;
        } else {
            return false;
        };
    };

    generateReservationLinks() {
        let buttons = [];
        let time = this.props.filters.dateParams;
        time = new Date(time.setMinutes(time.getMinutes() - 15))
        let i = 0;
        while (buttons.length < 5) {
            let status = 'res-inactive'
            if (i < 3) {
                time = new Date(time.setMinutes(time.getMinutes() - 15))
                if (this.available(time)) status = 'res-active';
                buttons.unshift(<button key={i} className={`res-button ${status}`}>{this.printTime(time)}</button>)
            } else if (i === 3) {
                time = this.props.filters.dateParams
                if (this.available(time)) status = 'res-active';
                buttons.push(<button key={i} className={`res-button ${status}`}>{this.printTime(time)}</button>)
            } else {
                time = new Date(time.setMinutes(time.getMinutes() + 15))
                if (this.available(time)) status = 'res-active';
                buttons.push(<button key={i} className={`res-button ${status}`}>{this.printTime(time)}</button>)
            }
            i++;
        };
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
                        <li>{`${this.props.restaurant.openAt}-${this.props.restaurant.closeAt}`}</li>
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