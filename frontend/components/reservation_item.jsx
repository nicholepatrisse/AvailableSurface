import React from 'react';
import * as dateTime from '../util/date_time_functions';
import { Link, withRouter } from 'react-router-dom';

class ReservationItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.cancelReservation = this.cancelReservation.bind(this);
    }

    handleClick() {
        this.props.changeFilter('dateParams', new Date(this.props.reservation.time))
        this.props.changeFilter('partyParams', this.props.reservation.partySize)
        this.props.changeFilter('occasion', this.props.reservation.occasion)
        this.props.changeFilter('requests', this.props.reservation.requests)
        this.props.history.push(`restaurants/${this.props.restaurant.id}/reserve/${this.props.reservation.id}`);
    };

    cancelReservation() {
        this.props.deleteReservation(this.props.reservation.id)
    }

    editLink() {
        if (this.props.editForm) {
            return (
                <div className="reservation-buttons">
                    <button onClick={this.handleClick}>
                            Edit Reservation
                    </button>
                    <button onClick={this.cancelReservation}>
                            Cancel Reservation
                    </button>
                </div>
            );
        };
    };

    render() {
        let restaurant = this.props.restaurant
        if (!restaurant) return null;
        let time = new Date(this.props.reservation.time);
        let partyDesc = this.props.reservation.partySize === 'larger' ? 'Larger Party' : `${this.props.reservation.partySize} People`
        let thumbUrl = this.props.restaurant.photoUrls[1];

        return (
            <div className="reservation-main">
                <img src={thumbUrl} />
                <div className="reservation-detail">
                    <Link to={`/restaurants/${restaurant.id}`}>
                        {restaurant.name}
                    </Link>
                    <ul>
                        <li><i className="far fa-calendar res-cal"></i> {dateTime.printDate(time)}</li>
                        <li><i className="far fa-clock res-clock"></i> {dateTime.printTime(time)}</li>
                        <li><i className="far fa-user res-user"></i> {partyDesc}</li>
                    </ul>
                    {this.editLink()}
                </div>
            </div>
        )
    };
}

export default withRouter(ReservationItem);