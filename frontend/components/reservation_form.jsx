import React from 'react';
import { Link } from 'react-router-dom';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props)
        let phone = this.props.user ? this.props.user.phone : '';
        let email = this.props.user ? this.props.user.email : '';
        let user_id = this.props.user ? this.props.user.id : null;
        let time = this.props.location.state ? this.props.location.state.time : null;
        let restaurant_id = this.props.restaurant ? this.props.restaurant.id : null;

        this.state = {
            phone,
            email,
            time, 
            user_id, 
            party_size: this.props.parties,
            occasion: '',
            requests: '',
            restaurant_id
        };

        this.updateRez = this.updateRez.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.restaurantId);
        this.props.fetchUser(this.props.userId)
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

    printTime(time) {
        let minute = time.getMinutes();
        let hour = time.getHours();
        let ampm = 'am'
        if (hour === 12) {
            ampm = 'pm';
        } else if (hour === 0) {
            hour = 12;
        } else if (hour > 12) {
            hour -= 12;
            ampm = "pm";
        };
        if (minute < 10) minute = `0${minute}`;
        return `${hour}:${minute} ${ampm}`
    }

    printDate(time) {
        const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec']
        let day = days[time.getDay()];
        let month = months[time.getMonth()]
        let date = time.getDate()
        return `${day}, ${month} ${date}`
    }

    handleSubmit(e) {
        e.preventDefault();
        let reservation = Object.assign({}, this.state);
        this.props.createReservation(reservation)
        .then(this.props.openModal('res-success'))
        .then(this.props.history.push('/'))
    };

    loaded() {
        if (this.props.restaurant) {
            let partyDesc = `${this.props.parties} People`
            if (this.state.parties === 'larger') partyDesc = 'Larger Party'
            let dateTime = new Date(this.props.location.state.time);
            return (
                <div className="res-page">
                    <h2>You're almost done!</h2>
                    <div className="res-info">
                        <img src={this.props.restaurant.photoUrl} alt=""/>
                        <div className="res-detail">
                            <Link to={`restaurants/${this.props.restaurant.id}`}>
                                {`${this.props.restaurant.name} - ${this.props.restaurant.city}`}
                            </Link>
                            <ul>
                                <li><i className="far fa-calendar res-cal"></i> {this.printDate(dateTime)}</li>
                                <li><i className="far fa-clock res-clock"></i> {this.printTime(dateTime)}</li>
                                <li><i className="far fa-user res-user"></i> {partyDesc}</li>
                            </ul>
                        </div>
                    </div>
                    {this.loggedIn()}
                    <form className="res-form">
                        <div className="row1">
                            <input 
                                type="tel" 
                                value={this.state.phone} 
                                onChange={this.updateRez('phone')} 
                                placeholder="phone"
                                required
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
                        <button onClick={this.handleSubmit}>Complete Reservation</button>
                    </form>
                </div>
            )
        }
    }

    validateProps() {
        if (!this.props.restaurantId) {
            this.props.history.push('/restaurants')
        } else if (!this.props.location.state) {
            this.props.history.push(`/restaurants/${this.props.restaurantId}`)
        }
    }

    render() {
        return(
            <div className="reservation-form">
                {this.validateProps()}
                {this.loaded()}
            </div>
        )
    };
}

export default ReservationForm;