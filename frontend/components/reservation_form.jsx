import React from 'react';
import { Link } from 'react-router-dom';
import * as dateTime from '../util/date_time_functions';
import { withRouter } from 'react-router-dom'

class ReservationForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            phone: '',
            email: '',
            time: new Date(this.props.filters.dateParams),
            user_id: '',
            party_size: this.props.filters.partyParams,
            occasion: this.props.filters.occasion,
            requests: this.props.filters.requests,
            restaurant_id: '',
        }

        this.updateRez = this.updateRez.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    constructParams() {
        if (this.props.user && this.props.filters) {
            this.setState({
                phone: this.props.user.phone,
                email: this.props.user.email,
                user_id: this.props.userId,
                restaurant_id: this.props.restaurantId,
            })
        }
    };

    componentDidMount() {
        this.props.fetchRestaurant(this.props.restaurantId)
        .then(this.props.fetchUser(this.props.userId))
        .then(this.constructParams())
    };

    loggedIn() {
        if (this.props.user) {
            let fullName = `${this.props.user.firstName} ${this.props.user.lastName} `;
            return (
                <div className="user-info">
                    {fullName}
                    (
                    <p onClick={() => this.props.openModal('login')}>
                        {`Not ${this.props.user.firstName}?`}
                    </p>
                    )
                </div>
        )}
    };

    updateRez(feild) {
        return (e) => this.setState({
            [feild]: e.currentTarget.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        let reservation = Object.assign({}, this.state);
        if (this.props.reservationId) {
            reservation['id'] = this.props.reservationId;
            this.props.updateReservation(reservation)
            .then(this.props.history.push('/'));
        } else {
            this.props.createReservation(reservation)
            .then(this.props.history.push('/'));
        }
    };

    render() {
        if (!this.props.restaurant) return null;

        let partyDesc = `${this.state.party_size} People`
        if (this.state.party_size === 'larger') partyDesc = 'Larger Party'

        let date = new Date(this.state.time);
        let thumbUrl = this.props.restaurant.photoUrls[1];

        return(
            <div className="reservation-form">
                <div className="res-page">
                    <h2>You're almost done!</h2>
                    <div className="res-info">
                        <img src={thumbUrl} alt="" />
                        <div className="res-detail">
                            <Link to={`restaurants/${this.props.restaurant.id}`}>
                                {`${this.props.restaurant.name} - ${this.props.restaurant.city}`}
                            </Link>
                            <ul>
                                <li><i className="far fa-calendar res-cal"></i> {dateTime.printDate(date)}</li>
                                <li><i className="far fa-clock res-clock"></i> {dateTime.printTime(date)}</li>
                                <li><i className="far fa-user res-user"></i> {partyDesc}</li>
                            </ul>
                        </div>
                    </div>
                    {this.loggedIn()}
                    <form className="res-form" onSubmit={this.handleSubmit}>
                        <div className="row1">
                            <input
                                type="tel"
                                value={this.state.phone}
                                onChange={this.updateRez('phone')}
                                placeholder="phone"
                                required type="tel"
                            />
                            <input
                                type="email"
                                value={this.state.email}
                                onChange={this.updateRez('email')}
                                placeholder="email"
                                required
                            />
                        </div>
                        <div className="row2">
                            <input
                                type="text"
                                value={this.state.occasion}
                                onChange={this.updateRez('occasion')}
                                placeholder="occasion"
                            />
                            <input
                                type="text"
                                value={this.state.requests}
                                onChange={() => this.updateRez('requests')}
                                placeholder="requests"
                            />
                        </div>
                        <button type="submit">Complete Reservation</button>
                    </form>
                </div>
            </div>
        )
    };
}

export default withRouter(ReservationForm);