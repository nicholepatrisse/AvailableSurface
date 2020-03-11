import React from 'react';
import { Link } from 'react-router-dom';

function printTime(time) {
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
};

function printDate(time) {
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let day = days[time.getDay()];
    let month = months[time.getMonth()]
    let date = time.getDate()
    return `${day}, ${month} ${date}`
}

class ReservationItem extends React.Component {
    editLink() {
        if (this.props.editForm) {
            return (
                <button>Edit Reservation</button>
            )
        } else {
            return null;
        }
    }

    render() {
        let restaurant = this.props.restaurants[this.props.reszie.restaurantId];
        let time = new Date(this.props.reszie.time);
        let partyDesc = this.props.reszie.partySize === 'larger' ? 'Larger Party' : `${this.props.reszie.partySize} People`

        return (
            <div className="reservation-main">
                <img src={restaurant.photoUrl} />
                <div className="reservation-detail">
                    <Link to={`/restaurants/${restaurant.id}`}>
                        {restaurant.name}
                    </Link>
                    <ul>
                        <li><i className="far fa-calendar res-cal"></i> {printDate(time)}</li>
                        <li><i className="far fa-clock res-clock"></i> {printTime(time)}</li>
                        <li><i className="far fa-user res-user"></i> {partyDesc}</li>
                    </ul>
                    {this.editLink()}
                </div>
            </div>
        )
    };
}

export default ReservationItem;