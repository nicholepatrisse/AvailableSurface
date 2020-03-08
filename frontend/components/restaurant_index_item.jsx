import React from 'react';
import { Link } from 'react-router-dom'

class RestaurantIndexItem extends React.Component {

    generateReservationLinks() {
        debugger
        let timeParam = this.props.filters.dateParams;
        let buttons = [];
        while (buttons.length < 5) {
            buttons.push(<button>{timeParam}</button>)
            timeParam = timeParam.setMinues( timeParam.getMinutes() + 15 );
        }
        debugger
        return buttons;
    }

    render () {
        return (
            <div key={this.props.restaurant.id} className="restaurant">
                <img src="https://stmedia.stimg.co/uptown-minneapolis-restaurant-libertine-closed.jpg?w=800" />
                <Link to={`/restaurants/${this.props.restaurant.id}`}>{this.props.restaurant.name}</Link>
                {/* Rating Stars and String */}
                {/* Available Reservation Times */}
                {this.generateReservationLinks()}
            </div>
        )
    }
};

export default RestaurantIndexItem;