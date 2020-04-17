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
            user_id: this.props.userId,
            party_size: this.props.filters.partyParams,
            occasion: this.props.filters.occasion,
            requests: this.props.filters.requests,
            restaurant_id: '',
        };

        this.updateRez = this.updateRez.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.restaurantId);
        this.props.fetchUser(this.props.userId);
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

    updateRez(e) {
        const value = e.target.value;
        this.setState({
            [e.target.name]: value
        });
    };

    userChanged() {
        let phoneUpdated = this.props.user.phoneNumber === this.state.phone;
        let emailUpdated = this.props.user.email === this.state.email;
        return phoneUpdated || emailUpdated;
    }

    updateUserInfo() {
        let user = Object.assign({}, this.props.user);
        user.phone_number = this.state.phone;
        user.email = this.state.email;
        console.log(user);
        this.props.updateUser(user);
    };

    handleSubmit(e) {
        e.preventDefault();
        let reservation = Object.assign({}, this.state);
        if (this.props.user && this.userChanged()) {
            this.updateUserInfo();
        };

        if (this.props.reservationId) {
            reservation['id'] = this.props.reservationId;
            this.props.updateReservation(reservation)
            .then(this.props.history.push('/'));
        } else {
            this.props.createReservation(reservation)
            .then(this.props.history.push('/'));
        };
    };

    render() {
        if (!this.props.restaurant) return null;
        this.state.restaurant_id = this.props.restaurantId;

        if (this.props.user && this.state.email === '') {
            this.state.phone = this.props.user.phoneNumber;
            this.state.email = this.props.user.email;
        };

        let partyDesc = `${this.state.party_size} People`
        if (this.state.party_size === 'larger') partyDesc = 'Larger Party'

        let date = new Date(this.state.time);
        let thumbUrl = this.props.restaurant.photoUrls[0];

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
                                type="text"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.updateRez}
                                placeholder="phone"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.updateRez}
                                placeholder="email"
                                required
                            />
                        </div>
                        <div className="row2">
                            <input
                                type="text"
                                name="occasion"
                                value={this.state.occasion}
                                onChange={this.updateRez}
                                placeholder="occasion"
                            />
                            <input
                                type="text"
                                name="requests"
                                value={this.state.requests}
                                onChange={this.updateRez}
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